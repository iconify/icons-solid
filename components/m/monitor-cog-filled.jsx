import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wssuxnb5s.css';
import '../../css/h/h4-_8v1va.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wssuxnb5s"/><path clip-rule="evenodd" class="h4-_8v1va"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-cog-filled"} {...others} />);
}

export default Component;
