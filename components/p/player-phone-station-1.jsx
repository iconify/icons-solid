import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgs28zbua.css';
import '../../css/t/ttb5ggb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lgs28zbua"/><path class="ttb5ggb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:player-phone-station-1"} {...others} />);
}

export default Component;
