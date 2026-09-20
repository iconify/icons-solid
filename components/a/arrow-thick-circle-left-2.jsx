import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/v/vwwbw8b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="vwwbw8b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-thick-circle-left-2"} {...others} />);
}

export default Component;
