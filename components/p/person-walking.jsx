import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5wv7fbyy.css';
import '../../css/u/un_991t-w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="i5wv7fbyy"/><path class="un_991t-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-walking"} {...others} />);
}

export default Component;
