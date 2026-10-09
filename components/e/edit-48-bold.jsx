import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqjn82ber.css';
import '../../css/z/z0zraxben.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yqjn82ber"/><path class="z0zraxben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:edit-48-bold"} {...others} />);
}

export default Component;
