import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr-uw36at.css';
import '../../css/n/nk4uw0zqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xr-uw36at"/><path class="nk4uw0zqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:foldable-horizontal-half"} {...others} />);
}

export default Component;
