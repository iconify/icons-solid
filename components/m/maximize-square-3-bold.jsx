import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivgsmkbsz.css';
import '../../css/x/x_vwkib6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivgsmkbsz"/><path clip-rule="evenodd" class="x_vwkib6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-square-3-bold"} {...others} />);
}

export default Component;
