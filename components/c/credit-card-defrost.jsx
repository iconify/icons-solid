import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mfd622bai.css';
import '../../css/u/usdqb9bio.css';
import '../../css/a/an2zekujb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="mfd622bai"/><path class="usdqb9bio"/><path class="an2zekujb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-defrost"} {...others} />);
}

export default Component;
