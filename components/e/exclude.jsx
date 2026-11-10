import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejvrojb0s.css';
import '../../css/s/s9k96rx5w.css';
import '../../css/l/lwlj3y_5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ejvrojb0s"/><path class="s9k96rx5w"/><path class="lwlj3y_5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:exclude"} {...others} />);
}

export default Component;
