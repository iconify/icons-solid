import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixuuqf97k.css';
import '../../css/z/zpf28kbqf.css';
import '../../css/s/se1b8acff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ixuuqf97k"/><path class="zpf28kbqf"/><path class="se1b8acff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:station2-duotone"} {...others} />);
}

export default Component;
