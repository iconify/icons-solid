import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2-1qwbgv.css';
import '../../css/r/r6h-a0bkr.css';
import '../../css/s/s-bn8xbic.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 t2-1qwbgv"/><path class="clr-i-solid clr-i-solid-path-2 r6h-a0bkr"/><path class="clr-i-solid clr-i-solid-path-3 s-bn8xbic"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:layers-solid"} {...others} />);
}

export default Component;
