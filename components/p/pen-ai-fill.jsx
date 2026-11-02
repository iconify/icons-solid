import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs2_t7lkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zs2_t7lkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pen-ai-fill"} {...others} />);
}

export default Component;
