import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz5lj8u_t.css';
import '../../css/r/rigcembux.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pz5lj8u_t"/><path class="rigcembux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-hammer"} {...others} />);
}

export default Component;
