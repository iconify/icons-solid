import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4lyu_g1g.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="e4lyu_g1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:old-republic"} {...others} />);
}

export default Component;
