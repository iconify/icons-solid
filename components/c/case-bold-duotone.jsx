import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qlhqa5a1y.css';
import '../../css/s/svu3l535p.css';
import '../../css/i/i4m8hib-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="qlhqa5a1y"/><path class="svu3l535p"/></g><path clip-rule="evenodd" class="i4m8hib-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-bold-duotone"} {...others} />);
}

export default Component;
