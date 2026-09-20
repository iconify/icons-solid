import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pug4ir7hv.css';
import '../../css/c/crznqgb3v.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="pug4ir7hv"/><path class="crznqgb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:enter-down"} {...others} />);
}

export default Component;
