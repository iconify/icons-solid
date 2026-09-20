import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dk74mlvza.css';
import '../../css/n/n-kur4wgq.css';
import '../../css/d/dz3ckykyj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dk74mlvza"/><path class="n-kur4wgq"/><path class="dz3ckykyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:global-learning"} {...others} />);
}

export default Component;
