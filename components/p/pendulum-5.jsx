import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pqp9xye6v.css';
import '../../css/p/pz9iwls3d.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="pqp9xye6v"/><path class="pz9iwls3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:pendulum-5"} {...others} />);
}

export default Component;
