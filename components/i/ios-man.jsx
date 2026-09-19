import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2dtwdbdi.css';
import '../../css/s/sec7i9buu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2dtwdbdi"/><path class="sec7i9buu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-man"} {...others} />);
}

export default Component;
