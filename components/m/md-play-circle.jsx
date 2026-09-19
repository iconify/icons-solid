import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ombmqu5rn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ombmqu5rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-play-circle"} {...others} />);
}

export default Component;
