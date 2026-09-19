import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/keh4ghbcn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="keh4ghbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:hand-point-left"} {...others} />);
}

export default Component;
