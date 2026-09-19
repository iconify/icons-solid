import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg-e9wbuc.css';
import '../../css/p/ptezgqtbz.css';
import '../../css/n/nazz6ccrh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="yg-e9wbuc"/><path class="ptezgqtbz"/><path class="nazz6ccrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-railroad-fill"} {...others} />);
}

export default Component;
