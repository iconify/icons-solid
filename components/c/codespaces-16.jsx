import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxe-vkb4m.css';
import '../../css/v/vnwywmtwn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mxe-vkb4m"/><path class="vnwywmtwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:codespaces-16"} {...others} />);
}

export default Component;
