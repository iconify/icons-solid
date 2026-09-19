import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv1cfib3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bv1cfib3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-left-ellipsis-solid"} {...others} />);
}

export default Component;
