import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-j_xfees.css';
import '../../css/s/s-45tkb7i.css';
import '../../css/k/ko4cnabae.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="s-j_xfees"/><path class="s-45tkb7i"/><path class="ko4cnabae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clipboard-heart"} {...others} />);
}

export default Component;
