import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xlntljo_b.css';
import '../../css/y/y58k7bb-w.css';
import '../../css/c/cke3tihzk.css';
import '../../css/v/vs4rimaky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xlntljo_b"/><circle class="y58k7bb-w"/><circle class="cke3tihzk"/><path class="vs4rimaky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:videotape"} {...others} />);
}

export default Component;
