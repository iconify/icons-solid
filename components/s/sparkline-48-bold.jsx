import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmtr6bb9i.css';
import '../../css/c/cxqwkvj3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmtr6bb9i"/><path class="cxqwkvj3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sparkline-48-bold"} {...others} />);
}

export default Component;
