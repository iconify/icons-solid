import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bjcq8u-lh.css';
import '../../css/i/iqy4f3ajf.css';
import '../../css/y/y26jmob4o.css';
import '../../css/d/d9-3mgywf.css';
import '../../css/y/yn0ky0bzp.css';
import '../../css/p/p46370bes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bjcq8u-lh"/><path class="iqy4f3ajf"/><path class="y26jmob4o"/><path class="d9-3mgywf"/><path class="yn0ky0bzp"/><path class="p46370bes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-2-linear"} {...others} />);
}

export default Component;
