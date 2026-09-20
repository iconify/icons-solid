import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc7a14f7v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lc7a14f7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:align-objects-horizontally"} {...others} />);
}

export default Component;
