import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_gegxb1j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a_gegxb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:castle-defensive-14"} {...others} />);
}

export default Component;
