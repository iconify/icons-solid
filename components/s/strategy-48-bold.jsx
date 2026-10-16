import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4lx5fghu.css';
import '../../css/d/d3p8osbna.css';
import '../../css/d/dxicmz50x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i4lx5fghu"/><path class="d3p8osbna"/><path class="dxicmz50x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:strategy-48-bold"} {...others} />);
}

export default Component;
