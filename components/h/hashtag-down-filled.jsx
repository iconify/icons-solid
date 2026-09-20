import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0bcgjzbp.css';
import '../../css/n/nqbikvqvq.css';
import '../../css/i/idx0gnbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e0bcgjzbp"/><path class="nqbikvqvq"/><path class="idx0gnbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hashtag-down-filled"} {...others} />);
}

export default Component;
