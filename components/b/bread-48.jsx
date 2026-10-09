import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw_wrbbbz.css';
import '../../css/f/ftl4kn5-g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kw_wrbbbz"/><path class="ftl4kn5-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bread-48"} {...others} />);
}

export default Component;
