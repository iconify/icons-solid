import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_cez01za.css';
import '../../css/l/l5zd4yydh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o_cez01za"/><path class="l5zd4yydh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-player-laptop"} {...others} />);
}

export default Component;
