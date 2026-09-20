import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnlcl2u2k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qnlcl2u2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:align-justified"} {...others} />);
}

export default Component;
