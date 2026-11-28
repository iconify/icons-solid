import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjx1ls_pc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/agia-nwsy.css';
import '../../css/u/ug2_86nbt.css';
import '../../css/t/t5jm6bbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjx1ls_pc secondary"/><g class="dt0cm9dhy primary"><path class="agia-nwsy"/><path class="ug2_86nbt"/><path class="t5jm6bbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spider-duo"} {...others} />);
}

export default Component;
