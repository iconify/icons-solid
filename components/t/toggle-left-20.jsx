import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7u15acll.css';
import '../../css/g/gl6s0rb7l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u7u15acll"/><path class="gl6s0rb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toggle-left-20"} {...others} />);
}

export default Component;
