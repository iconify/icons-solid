import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpqqn6bis.css';
import '../../css/r/rln8920_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpqqn6bis"/><path class="rln8920_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:envelope-filled"} {...others} />);
}

export default Component;
