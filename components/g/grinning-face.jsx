import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/e/ecj0x5bjg.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/o/otit0l4ks.css';
import '../../css/q/quhlm1t5n.css';
import '../../css/f/fodwoxbkg.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><path class="ecj0x5bjg"/><path class="q0r50o_-q"/><circle class="otit0l4ks"/><path class="quhlm1t5n"/><path class="fodwoxbkg"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-face"} {...others} />);
}

export default Component;
