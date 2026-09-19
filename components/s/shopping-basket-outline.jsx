import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfdvjkbvs.css';
import '../../css/c/c6rg3sbah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfdvjkbvs"/><path clip-rule="evenodd" class="c6rg3sbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:shopping-basket-outline"} {...others} />);
}

export default Component;
