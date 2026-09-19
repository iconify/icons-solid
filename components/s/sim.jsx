import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxd28wbfb.css';
import '../../css/j/jpb-onl0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zxd28wbfb"/><path class="jpb-onl0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:sim"} {...others} />);
}

export default Component;
