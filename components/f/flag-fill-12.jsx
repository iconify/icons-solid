import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2w0dfbzz.css';
import '../../css/x/xjlu6cc0h.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="v2w0dfbzz"/><path class="xjlu6cc0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:flag-fill-12"} {...others} />);
}

export default Component;
