import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqgd8mbhr.css';
import '../../css/e/ek6jtbtll.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/g/g4dwnacct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aqgd8mbhr"/><path class="ek6jtbtll"/><path class="xtyg9db9j"/><path class="g4dwnacct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-check"} {...others} />);
}

export default Component;
