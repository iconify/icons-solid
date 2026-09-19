import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zeggah3kn.css';
import '../../css/p/pfa780btb.css';
import '../../css/v/vvwsy1zbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zeggah3kn"/><path class="pfa780btb"/><path class="vvwsy1zbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pokeball"} {...others} />);
}

export default Component;
