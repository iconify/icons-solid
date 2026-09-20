import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo-li9bxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zo-li9bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:classify-2-ai-fill"} {...others} />);
}

export default Component;
