import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy_hb70yo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qy_hb70yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alpha-o-circle-outline"} {...others} />);
}

export default Component;
