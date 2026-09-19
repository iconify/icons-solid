import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn41ubbup.css';
import '../../css/i/i9_-pzb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rn41ubbup"/><path class="i9_-pzb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:server-cog"} {...others} />);
}

export default Component;
