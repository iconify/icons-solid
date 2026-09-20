import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxmbbbc3u.css';
import '../../css/q/qzuulfbuk.css';

const viewBox = {"width":77.8,"height":46.9};
const content = `<g transform="translate(0 1.292)scale(3.69565)" class="cuyn6tgcc"><path class="rxmbbbc3u"/><circle class="qzuulfbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:monday"} {...others} />);
}

export default Component;
