import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yeh6a5f4t.css';
import '../../css/a/anpcbdbzt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yeh6a5f4t"/><path class="anpcbdbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:warningsign"} {...others} />);
}

export default Component;
