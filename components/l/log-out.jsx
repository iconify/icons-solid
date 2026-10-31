import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lz6a9e_ad.css';
import '../../css/u/u8tn72rpy.css';
import '../../css/u/uen_72mqb.css';
import '../../css/p/pon64bbuo.css';
import '../../css/h/h0wv2tbxa.css';
import '../../css/z/z2crf9b4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lz6a9e_ad wm-shadow"/><path class="u8tn72rpy"/><path class="uen_72mqb"/><path class="pon64bbuo"/><path class="h0wv2tbxa"/><path class="z2crf9b4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:log-out"} {...others} />);
}

export default Component;
