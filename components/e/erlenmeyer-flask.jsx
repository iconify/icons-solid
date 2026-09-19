import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlktqpbzo.css';
import '../../css/k/kif_tcbyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mlktqpbzo"/><path class="kif_tcbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:erlenmeyer-flask"} {...others} />);
}

export default Component;
