import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nl8uk_bxx.css';
import '../../css/m/mt_wnwdig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nl8uk_bxx"/><path class="mt_wnwdig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:camera-tripod"} {...others} />);
}

export default Component;
