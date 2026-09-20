import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oaxgmwbwd.css';
import '../../css/p/p2q7ubcid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oaxgmwbwd"/><path class="p2q7ubcid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-smiley-1"} {...others} />);
}

export default Component;
