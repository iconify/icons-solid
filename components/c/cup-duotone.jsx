import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m32dkqkyz.css';
import '../../css/q/q9ns9f5he.css';
import '../../css/v/v3uxt06nb.css';
import '../../css/z/zxno-cv2h.css';
import '../../css/f/f4p-c0bsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m32dkqkyz"/><path class="q9ns9f5he"/><path clip-rule="evenodd" class="v3uxt06nb"/><path class="zxno-cv2h"/><path class="f4p-c0bsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup-duotone"} {...others} />);
}

export default Component;
