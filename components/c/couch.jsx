import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc_tq0a-b.css';
import '../../css/g/gl477rbyy.css';
import '../../css/n/nxyuhmb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bc_tq0a-b"/><path class="gl477rbyy"/><path class="nxyuhmb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:couch"} {...others} />);
}

export default Component;
