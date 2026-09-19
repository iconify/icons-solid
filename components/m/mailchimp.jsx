import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8u7_hugl.css';
import '../../css/e/e9di-eb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8u7_hugl"/><path class="e9di-eb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:mailchimp"} {...others} />);
}

export default Component;
