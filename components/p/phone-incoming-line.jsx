import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_arb5qms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_arb5qms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:phone-incoming-line"} {...others} />);
}

export default Component;
