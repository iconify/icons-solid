import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvzi3lbpc.css';
import '../../css/z/zfoh0m8an.css';
import '../../css/p/ps9o2abca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dvzi3lbpc"/><path class="zfoh0m8an"/><path class="ps9o2abca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suitcase-2-filled"} {...others} />);
}

export default Component;
