import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv67p9b9k.css';
import '../../css/u/unmzc2s1t.css';
import '../../css/a/a_oo1mbmr.css';
import '../../css/e/e7gwqvbfg.css';
import '../../css/s/sb-xycbpp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mv67p9b9k"/><path class="unmzc2s1t"/><path class="a_oo1mbmr"/><path class="e7gwqvbfg"/><path class="sb-xycbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dart"} {...others} />);
}

export default Component;
