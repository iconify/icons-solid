import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5zkycj1r.css';
import '../../css/u/uwnsfhbut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j5zkycj1r"/><path class="uwnsfhbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cast-48"} {...others} />);
}

export default Component;
