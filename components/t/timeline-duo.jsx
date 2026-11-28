import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txeb3ccdp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vfxw2kbsy.css';
import '../../css/l/lo9-ieb0v.css';
import '../../css/d/dpfzi62zp.css';
import '../../css/e/ehnu6wb0p.css';
import '../../css/y/y35be7bye.css';
import '../../css/i/i8umzx7ou.css';
import '../../css/c/c5se3zb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary txeb3ccdp"/><g class="dt0cm9dhy primary"><path class="vfxw2kbsy"/><path class="lo9-ieb0v"/><path class="dpfzi62zp"/><path class="ehnu6wb0p"/><path class="y35be7bye"/><path class="i8umzx7ou"/><path class="c5se3zb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:timeline-duo"} {...others} />);
}

export default Component;
