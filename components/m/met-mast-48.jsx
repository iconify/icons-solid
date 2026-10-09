import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo7du9zba.css';
import '../../css/x/xjow9tx1f.css';
import '../../css/d/d6q9c8lhh.css';
import '../../css/y/y0z9-uuzg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jo7du9zba"/><path class="xjow9tx1f"/><path class="d6q9c8lhh"/><path class="y0z9-uuzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:met-mast-48"} {...others} />);
}

export default Component;
