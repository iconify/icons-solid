import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mopdhnbdd.css';
import '../../css/m/ml6irbcyc.css';
import '../../css/j/j2yb1ab3d.css';
import '../../css/k/kyo440vyg.css';
import '../../css/c/cf1mp-bbw.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="mopdhnbdd"/><path class="ml6irbcyc"/><path class="j2yb1ab3d"/><path class="kyo440vyg"/><circle class="cf1mp-bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:sandbox-outlined"} {...others} />);
}

export default Component;
