import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec2hf9bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ec2hf9bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fire-minimalistic-outline"} {...others} />);
}

export default Component;
