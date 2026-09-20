import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h-xtj6w1m.css';
import '../../css/o/o2svb5b6o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="h-xtj6w1m"/><path class="o2svb5b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:car-taxi-1"} {...others} />);
}

export default Component;
