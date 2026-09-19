import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x6_u8dk8t.css';
import '../../css/p/p70zy7b3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x6_u8dk8t"/><path class="p70zy7b3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-music"} {...others} />);
}

export default Component;
