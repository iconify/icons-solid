import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z1k8g4bdr.css';
import '../../css/y/ysnygy52z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z1k8g4bdr"/><path class="ysnygy52z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:nuclear-power"} {...others} />);
}

export default Component;
