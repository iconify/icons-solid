import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/towxg4bzd.css';
import '../../css/p/p56w44_1f.css';
import '../../css/i/i6ayrqbef.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="towxg4bzd"/><path class="p56w44_1f"/><path class="i6ayrqbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:test-tube-48"} {...others} />);
}

export default Component;
