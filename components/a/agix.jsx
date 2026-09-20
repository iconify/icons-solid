import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utl2tvf5z.css';
import '../../css/m/mpy7uabqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utl2tvf5z"/><path class="mpy7uabqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:agix"} {...others} />);
}

export default Component;
