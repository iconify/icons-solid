import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqx-81tcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rqx-81tcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radio-receiver-filled"} {...others} />);
}

export default Component;
