import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjr6b_b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cjr6b_b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:paint-brush-ai-fill"} {...others} />);
}

export default Component;
