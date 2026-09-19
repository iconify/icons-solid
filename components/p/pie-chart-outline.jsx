import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcy09zexs.css';
import '../../css/v/vani8sbax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fcy09zexs"/><path class="vani8sbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:pie-chart-outline"} {...others} />);
}

export default Component;
