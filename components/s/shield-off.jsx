import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gink87-eb.css';
import '../../css/d/dira_zsnk.css';
import '../../css/q/q62u3bwbs.css';
import '../../css/a/arhjzpbfh.css';
import '../../css/i/iz98jac_v.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/r/rl1rttwal.css';
import '../../css/r/rjas32bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gink87-eb wm-shadow"/><path class="dira_zsnk"/><path class="q62u3bwbs"/><path class="arhjzpbfh"/><path class="iz98jac_v wm-shine"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="rl1rttwal wm-s"/><path class="rjas32bmi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shield-off"} {...others} />);
}

export default Component;
