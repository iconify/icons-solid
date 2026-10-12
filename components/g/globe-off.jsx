import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3nny7b_l.css';
import '../../css/c/co8tsobue.css';
import '../../css/y/yzb8mim2i.css';
import '../../css/v/vsfn3sbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="e3nny7b_l"/><circle transform="rotate(90 12 12)" class="co8tsobue"/><ellipse transform="rotate(90 12 12)" class="yzb8mim2i"/><path class="vsfn3sbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-off"} {...others} />);
}

export default Component;
