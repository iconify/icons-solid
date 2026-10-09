import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/infdtvbxp.css';
import '../../css/x/xa4y2gv4w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="infdtvbxp"/><path class="xa4y2gv4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-up-48"} {...others} />);
}

export default Component;
