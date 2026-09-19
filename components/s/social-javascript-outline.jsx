import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9kdxsbyj.css';
import '../../css/s/skl1w_bhf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o9kdxsbyj"/><path class="skl1w_bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-javascript-outline"} {...others} />);
}

export default Component;
