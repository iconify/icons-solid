import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xflx9c36z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xflx9c36z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chat-minus-filled"} {...others} />);
}

export default Component;
