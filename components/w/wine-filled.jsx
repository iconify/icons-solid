import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1w1afvdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v1w1afvdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:wine-filled"} {...others} />);
}

export default Component;
