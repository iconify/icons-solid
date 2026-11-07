import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn_05tynm.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/ah45prb2d.css';
import '../../css/e/en7qtqbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yn_05tynm"/><g class="xtpeb-edw"><path class="ah45prb2d"/><path class="en7qtqbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-3-bold-duotone"} {...others} />);
}

export default Component;
