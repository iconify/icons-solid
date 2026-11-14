import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuutrabsm.css';
import '../../css/w/wnran_bnw.css';
import '../../css/y/yn5soub3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vuutrabsm"/><path class="wnran_bnw"/><path class="yn5soub3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:collections-bookmark"} {...others} />);
}

export default Component;
