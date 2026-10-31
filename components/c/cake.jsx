import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gwr279xdo.css';
import '../../css/z/zioxr9brm.css';
import '../../css/i/im6ez1_gv.css';
import '../../css/z/z3qat-uzo.css';
import '../../css/p/p9-q51bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gwr279xdo wm-shadow"/><path class="zioxr9brm"/><path class="im6ez1_gv"/><path class="z3qat-uzo"/><path class="p9-q51bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cake"} {...others} />);
}

export default Component;
