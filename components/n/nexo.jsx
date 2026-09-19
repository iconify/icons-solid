import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq6t3pvdw.css';
import '../../css/m/md286fbip.css';
import '../../css/s/s1j3-iwmq.css';
import '../../css/e/eakutobwg.css';
import '../../css/l/lr085b9_l.css';
import '../../css/l/luuhwjbmo.css';
import '../../css/k/ky0wy5b4q.css';
import '../../css/t/t77qtccwz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="wq6t3pvdw"/><g class="md286fbip"><path class="s1j3-iwmq"/><path class="eakutobwg"/><path class="lr085b9_l"/><path class="luuhwjbmo"/><path class="ky0wy5b4q"/><path class="t77qtccwz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nexo"} {...others} />);
}

export default Component;
