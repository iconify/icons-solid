import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjq2_lbky.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bjq2_lbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:phone-alt"} {...others} />);
}

export default Component;
