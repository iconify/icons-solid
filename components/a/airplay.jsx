import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ymm0xacmk.css';
import '../../css/z/z0uaywb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ymm0xacmk"/><path class="z0uaywb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:airplay"} {...others} />);
}

export default Component;
