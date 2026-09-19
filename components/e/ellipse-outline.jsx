import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3ouhtb3r.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="q3ouhtb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ellipse-outline"} {...others} />);
}

export default Component;
