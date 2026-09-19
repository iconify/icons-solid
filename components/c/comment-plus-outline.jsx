import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr2nmsnyl.css';
import '../../css/o/ono4a3f1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr2nmsnyl"/><path clip-rule="evenodd" class="ono4a3f1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:comment-plus-outline"} {...others} />);
}

export default Component;
