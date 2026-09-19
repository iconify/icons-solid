import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp1re3c8g.css';
import '../../css/g/gdtbnxj2e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fp1re3c8g"/><path class="gdtbnxj2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:copy"} {...others} />);
}

export default Component;
