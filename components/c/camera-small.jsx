import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rl969zcmk.css';
import '../../css/z/za94ki6pw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rl969zcmk"/><path class="za94ki6pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:camera-small"} {...others} />);
}

export default Component;
