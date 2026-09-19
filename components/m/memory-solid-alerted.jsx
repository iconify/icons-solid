import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0rydvu9s.css';
import '../../css/d/df-f0-7ah.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted w0rydvu9s"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-2--alerted df-f0-7ah"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:memory-solid-alerted"} {...others} />);
}

export default Component;
