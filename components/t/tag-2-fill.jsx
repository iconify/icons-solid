import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2fiuw9jr.css';
import '../../css/k/koneki24a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2fiuw9jr"/><path clip-rule="evenodd" class="koneki24a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tag-2-fill"} {...others} />);
}

export default Component;
