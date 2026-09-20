import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zobhzcaid.css';
import '../../css/z/zrdlp3d4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zobhzcaid"/><path class="zrdlp3d4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket-duotone"} {...others} />);
}

export default Component;
