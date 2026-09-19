import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytw07_b-i.css';
import '../../css/v/vh7f-ub8s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ytw07_b-i"/><path class="vh7f-ub8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bikini"} {...others} />);
}

export default Component;
