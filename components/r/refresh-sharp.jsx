import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zezrunbvz.css';
import '../../css/i/i55evib8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zezrunbvz"/><path class="i55evib8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:refresh-sharp"} {...others} />);
}

export default Component;
