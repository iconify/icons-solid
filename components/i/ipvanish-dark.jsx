import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv1ourhyg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dv1ourhyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ipvanish-dark"} {...others} />);
}

export default Component;
