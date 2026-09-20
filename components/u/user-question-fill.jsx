import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9dz9xb2q.css';
import '../../css/y/yqmoletoa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9dz9xb2q"/><path clip-rule="evenodd" class="yqmoletoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:user-question-fill"} {...others} />);
}

export default Component;
