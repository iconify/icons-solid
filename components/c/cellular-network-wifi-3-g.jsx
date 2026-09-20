import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z9lbs2b0c.css';
import '../../css/h/h1i1q3bak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z9lbs2b0c"/><path class="h1i1q3bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cellular-network-wifi-3-g"} {...others} />);
}

export default Component;
