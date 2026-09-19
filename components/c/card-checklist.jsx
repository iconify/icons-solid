import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xoaxl7bum.css';
import '../../css/z/zaqju3b9q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="xoaxl7bum"/><path class="zaqju3b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:card-checklist"} {...others} />);
}

export default Component;
