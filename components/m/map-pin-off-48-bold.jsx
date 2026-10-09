import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/keo7l-5me.css';
import '../../css/a/ad8--_xso.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="keo7l-5me"/><path class="ad8--_xso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-off-48-bold"} {...others} />);
}

export default Component;
