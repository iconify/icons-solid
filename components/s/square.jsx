import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/i/ibtq3f5qv.css';
import '../../css/y/y8u5orfmm.css';
import '../../css/v/vqwnr0bfy.css';
import '../../css/u/usaqtc2si.css';
import '../../css/d/dcw0itb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="ibtq3f5qv"/><path class="y8u5orfmm"/><path class="vqwnr0bfy"/><path class="usaqtc2si"/><path class="dcw0itb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:square"} {...others} />);
}

export default Component;
