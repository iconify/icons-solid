import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq88i7qnu.css';
import '../../css/j/ju-kz0ttg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zq88i7qnu"/><path class="ju-kz0ttg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:captions-48"} {...others} />);
}

export default Component;
