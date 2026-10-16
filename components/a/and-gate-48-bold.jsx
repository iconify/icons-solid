import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7zl_d3jf.css';
import '../../css/p/p7-m9i8me.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d7zl_d3jf"/><path class="p7-m9i8me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:and-gate-48-bold"} {...others} />);
}

export default Component;
