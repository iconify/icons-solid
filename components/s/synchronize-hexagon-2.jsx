import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l0kwmqmjd.css';
import '../../css/x/xg567nb4k.css';
import '../../css/u/uyopdksfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="l0kwmqmjd"/><path class="xg567nb4k"/><path class="uyopdksfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:synchronize-hexagon-2"} {...others} />);
}

export default Component;
