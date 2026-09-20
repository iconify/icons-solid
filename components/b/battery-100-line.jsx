import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qt4hqvhwm.css';
import '../../css/d/d9ofjtyju.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="qt4hqvhwm"/><path class="d9ofjtyju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:battery-100-line"} {...others} />);
}

export default Component;
