import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0p-a1baf.css';
import '../../css/u/uu8vm-ber.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u0p-a1baf"/><path class="uu8vm-ber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:light-at-the-end-of-tunnel"} {...others} />);
}

export default Component;
