import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vy9sdxbjj.css';
import '../../css/z/za-_j2fbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="vy9sdxbjj"/><path class="za-_j2fbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-dots-light"} {...others} />);
}

export default Component;
