import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npv1kvbsz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="npv1kvbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:quinscape"} {...others} />);
}

export default Component;
