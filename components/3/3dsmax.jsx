import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc7tfnbgj.css';
import '../../css/e/eu3o_ilxw.css';
import '../../css/b/b1ql3zb2y.css';
import '../../css/g/g6vgndbzt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tc7tfnbgj"/><path class="eu3o_ilxw"/><path class="b1ql3zb2y"/><path class="g6vgndbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:3dsmax"} {...others} />);
}

export default Component;
