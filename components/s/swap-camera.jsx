import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnebg0b2s.css';
import '../../css/q/q6gz-gb_g.css';
import '../../css/i/ix4n0acam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nnebg0b2s"/><path class="q6gz-gb_g"/><path class="ix4n0acam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:swap-camera"} {...others} />);
}

export default Component;
