import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky74tsb9t.css';
import '../../css/i/iacqrl92w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ky74tsb9t"/><path class="iacqrl92w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:product-hunt"} {...others} />);
}

export default Component;
