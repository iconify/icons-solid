import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyir5yn6t.css';
import '../../css/j/jtw39nbby.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lyir5yn6t"/><path class="jtw39nbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-butt-48-bold"} {...others} />);
}

export default Component;
