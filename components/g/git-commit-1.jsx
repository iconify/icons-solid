import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bw-kf0fku.css';
import '../../css/j/johe5ybcn.css';
import '../../css/t/tcdd8ibxt.css';
import '../../css/s/su14qkbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="bw-kf0fku"/><path class="johe5ybcn"/><path class="tcdd8ibxt"/><path class="su14qkbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:git-commit-1"} {...others} />);
}

export default Component;
