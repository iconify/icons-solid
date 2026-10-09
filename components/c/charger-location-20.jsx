import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crgylcbgx.css';
import '../../css/j/j_uf38bmg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="crgylcbgx"/><path class="j_uf38bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-location-20"} {...others} />);
}

export default Component;
