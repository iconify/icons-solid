import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5us7hf0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5us7hf0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:open-arm-fill"} {...others} />);
}

export default Component;
