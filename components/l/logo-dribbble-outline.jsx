import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx1b7jeq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="btx1b7jeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-dribbble-outline"} {...others} />);
}

export default Component;
