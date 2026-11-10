import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4n5f-jbq.css';
import '../../css/f/fow_0ei_p.css';
import '../../css/t/tb6yzhyny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a4n5f-jbq"/><path class="fow_0ei_p"/><path class="tb6yzhyny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:crown"} {...others} />);
}

export default Component;
