import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdsnylbwc.css';
import '../../css/l/lb80qlbob.css';
import '../../css/k/ko1bcvb2i.css';
import '../../css/c/ct87dwbyc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xdsnylbwc"/><g class="lb80qlbob"><path class="ko1bcvb2i"/><path class="ct87dwbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beating-heart"} {...others} />);
}

export default Component;
