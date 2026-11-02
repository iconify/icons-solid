import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p65yjyuha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p65yjyuha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-merge-conflict-fill"} {...others} />);
}

export default Component;
