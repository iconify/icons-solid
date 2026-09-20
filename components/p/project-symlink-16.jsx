import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpnn3uu-g.css';
import '../../css/j/jletztwxl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tpnn3uu-g"/><path class="jletztwxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:project-symlink-16"} {...others} />);
}

export default Component;
