import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo4xr7bel.css';
import '../../css/h/h8zuyyb3g.css';
import '../../css/h/hv6ma6bat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo4xr7bel"/><path class="h8zuyyb3g"/><path class="hv6ma6bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:audible"} {...others} />);
}

export default Component;
