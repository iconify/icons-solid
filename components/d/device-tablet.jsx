import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqgd8mbhr.css';
import '../../css/t/thk5b3bcx.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aqgd8mbhr"/><path class="thk5b3bcx"/><path class="xtyg9db9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet"} {...others} />);
}

export default Component;
