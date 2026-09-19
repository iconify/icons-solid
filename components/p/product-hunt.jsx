import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_h4tsf_v.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="f_h4tsf_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:product-hunt"} {...others} />);
}

export default Component;
