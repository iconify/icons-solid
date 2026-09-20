import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi7xtcbkc.css';
import '../../css/q/qiya7tpcc.css';
import '../../css/i/ipmhgebmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gi7xtcbkc"/><path class="qiya7tpcc"/><path class="ipmhgebmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-figma"} {...others} />);
}

export default Component;
