import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dcw4ccctf.css';
import '../../css/c/c7zsidbio.css';
import '../../css/a/aga97actr.css';
import '../../css/l/luym5ou8t.css';
import '../../css/r/retdkbgbu.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dcw4ccctf"/><path clip-rule="evenodd" class="c7zsidbio"/><path class="aga97actr"/><path clip-rule="evenodd" class="luym5ou8t"/><path clip-rule="evenodd" class="retdkbgbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:countdown"} {...others} />);
}

export default Component;
