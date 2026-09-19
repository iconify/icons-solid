import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_4tjt7gm.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="e_4tjt7gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:etsy"} {...others} />);
}

export default Component;
