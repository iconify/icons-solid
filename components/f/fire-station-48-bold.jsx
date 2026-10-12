import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fui3mb06j.css';
import '../../css/z/zgffl4lji.css';
import '../../css/i/i_ixh4b2n.css';
import '../../css/t/t6015cucx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fui3mb06j"/><path class="zgffl4lji"/><path class="i_ixh4b2n"/><path class="t6015cucx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-station-48-bold"} {...others} />);
}

export default Component;
