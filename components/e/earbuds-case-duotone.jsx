import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8qxsg89u.css';
import '../../css/t/tpnq1y5ic.css';
import '../../css/t/tr4a1zp4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y8qxsg89u"/><path class="tpnq1y5ic"/><path class="tr4a1zp4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-case-duotone"} {...others} />);
}

export default Component;
