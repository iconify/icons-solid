import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_bz0t0lf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z_bz0t0lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-bar-overlay"} {...others} />);
}

export default Component;
