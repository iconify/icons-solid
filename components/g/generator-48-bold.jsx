import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu71a8jkb.css';
import '../../css/a/a6z1s6b1h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wu71a8jkb"/><path class="a6z1s6b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-48-bold"} {...others} />);
}

export default Component;
