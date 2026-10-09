import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1yx6v2_d.css';
import '../../css/t/tds6hxauo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z1yx6v2_d"/><path class="tds6hxauo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apple-48"} {...others} />);
}

export default Component;
