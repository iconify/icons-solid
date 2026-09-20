import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp4xf36ii.css';
import '../../css/y/yp70zv-ps.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bp4xf36ii"/><path class="yp70zv-ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-graphic-tablet-draw"} {...others} />);
}

export default Component;
