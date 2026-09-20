import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/n/nf5vx2b-m.css';
import '../../css/e/eyggrbfpz.css';
import '../../css/n/n617plbfy.css';
import '../../css/r/rckncsljp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="nf5vx2b-m"/><path class="eyggrbfpz"/><path class="n617plbfy"/><circle class="rckncsljp"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-dominican-republic"} {...others} />);
}

export default Component;
