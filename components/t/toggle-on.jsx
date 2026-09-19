import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrui74b0l.css';
import '../../css/k/k-gr6jbve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vrui74b0l"/><path class="k-gr6jbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:toggle-on"} {...others} />);
}

export default Component;
