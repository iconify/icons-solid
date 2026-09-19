import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alh_6ac7v.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="alh_6ac7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:stripe-s"} {...others} />);
}

export default Component;
