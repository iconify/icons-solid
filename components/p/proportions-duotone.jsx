import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q050sk4js.css';
import '../../css/y/yhx8xobnk.css';
import '../../css/u/uu_td6bkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q050sk4js"/><path class="yhx8xobnk"/><path class="uu_td6bkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:proportions-duotone"} {...others} />);
}

export default Component;
