import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pccwcw4ye.css';
import '../../css/a/alckcbcdo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pccwcw4ye"/><path class="alckcbcdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:up-left"} {...others} />);
}

export default Component;
