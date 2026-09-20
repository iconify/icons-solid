import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_ci1vbkf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_ci1vbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spirit-airlines-light"} {...others} />);
}

export default Component;
