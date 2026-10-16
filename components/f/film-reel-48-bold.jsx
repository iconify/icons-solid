import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw6oy3bzc.css';
import '../../css/m/m-5n_6hvb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xw6oy3bzc"/><path class="m-5n_6hvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:film-reel-48-bold"} {...others} />);
}

export default Component;
