import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8249nd8c.css';
import '../../css/z/zfc2xdsph.css';
import '../../css/x/xu7mjod1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-180 9.35 21.28)" class="h8249nd8c"/><rect transform="rotate(-180 21.27 21.28)" class="zfc2xdsph"/><path class="xu7mjod1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-start-filled"} {...others} />);
}

export default Component;
