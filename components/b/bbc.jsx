import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi_lh7bxp.css';
import '../../css/l/lu06jwoxi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xi_lh7bxp"/><path class="lu06jwoxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:bbc"} {...others} />);
}

export default Component;
