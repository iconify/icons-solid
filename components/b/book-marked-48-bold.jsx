import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6wbwjb8t.css';
import '../../css/l/l2frilr8s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f6wbwjb8t"/><path class="l2frilr8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-marked-48-bold"} {...others} />);
}

export default Component;
