import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r41hwjbre.css';
import '../../css/w/weo44ub0f.css';
import '../../css/k/ks34f152i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r41hwjbre"/><path class="weo44ub0f"/><path class="ks34f152i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:presentation-microphone"} {...others} />);
}

export default Component;
