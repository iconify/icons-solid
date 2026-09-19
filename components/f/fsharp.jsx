import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptysjpnfo.css';
import '../../css/z/z3hk8xbow.css';
import '../../css/y/yadmzfb9b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ptysjpnfo"/><path class="z3hk8xbow"/><path class="yadmzfb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fsharp"} {...others} />);
}

export default Component;
