import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vobd55u4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="play-outline"><path class="(Stroke) 54 Vector vobd55u4d" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:play-outline"} {...others} />);
}

export default Component;
