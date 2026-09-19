import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4djbg3cp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x4djbg3cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:paperclip"} {...others} />);
}

export default Component;
