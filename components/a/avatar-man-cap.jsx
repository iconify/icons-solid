import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnmkvdb3h.css';
import '../../css/n/n0bi0-bcs.css';
import '../../css/s/sjhjgmgsw.css';
import '../../css/k/kr9qfqbem.css';
import '../../css/a/a0ep3vkda.css';
import '../../css/l/loi3spsyi.css';
import '../../css/o/ohrcj7qjp.css';
import '../../css/d/d1k4vcd7l.css';
import '../../css/a/atpikebfo.css';
import '../../css/z/z22xbkb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qnmkvdb3h"/><path class="n0bi0-bcs"/><path class="sjhjgmgsw"/><path class="kr9qfqbem"/><path class="a0ep3vkda wm-shine"/><path class="loi3spsyi wm-k"/><path class="ohrcj7qjp wm-a"/><path class="d1k4vcd7l"/><path class="atpikebfo"/><path class="wm-shine z22xbkb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-man-cap"} {...others} />);
}

export default Component;
