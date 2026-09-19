import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7uu4cbsy.css';
import '../../css/x/x3xz6cc_v.css';
import '../../css/u/u_27of_ic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o7uu4cbsy"/><path class="x3xz6cc_v"/><path class="u_27of_ic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-slow-wind-02"} {...others} />);
}

export default Component;
