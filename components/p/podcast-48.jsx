import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/matvajbjh.css';
import '../../css/u/u2t84ywhz.css';
import '../../css/e/e1el_7bsb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="matvajbjh"/><path class="u2t84ywhz"/><path class="e1el_7bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podcast-48"} {...others} />);
}

export default Component;
