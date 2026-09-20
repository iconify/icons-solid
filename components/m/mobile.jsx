import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex2jck8xh.css';
import '../../css/z/zdqlz_b3e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ex2jck8xh"/><path clip-rule="evenodd" class="zdqlz_b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:mobile"} {...others} />);
}

export default Component;
