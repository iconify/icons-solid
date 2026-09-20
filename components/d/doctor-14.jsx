import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq_hkwbbx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cq_hkwbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:doctor-14"} {...others} />);
}

export default Component;
