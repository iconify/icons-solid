import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjgqdudox.css';
import '../../css/c/c-ji3vbvx.css';
import '../../css/g/gk48d415h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wjgqdudox"/><path class="c-ji3vbvx"/><path class="gk48d415h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-48-bold"} {...others} />);
}

export default Component;
