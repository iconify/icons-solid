import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb0uyplao.css';
import '../../css/v/volv26bxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bb0uyplao"/><path class="volv26bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-quote"} {...others} />);
}

export default Component;
