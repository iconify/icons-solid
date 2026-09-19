import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elyxbx7ey.css';
import '../../css/r/r92xs4nql.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="elyxbx7ey"/><path class="r92xs4nql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:terminal-outline"} {...others} />);
}

export default Component;
