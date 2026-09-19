import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lx6sfha5x.css';
import '../../css/q/qz0s-uf3y.css';
import '../../css/b/bukhfnboa.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="lx6sfha5x"/><path class="qz0s-uf3y"/><path class="bukhfnboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:calendar-3"} {...others} />);
}

export default Component;
