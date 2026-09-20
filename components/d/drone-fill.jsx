import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5mogn6wk.css';
import '../../css/z/ziwtbxb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5mogn6wk"/><path class="ziwtbxb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:drone-fill"} {...others} />);
}

export default Component;
