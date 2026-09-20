import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd4lzpbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nd4lzpbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-outline"} {...others} />);
}

export default Component;
