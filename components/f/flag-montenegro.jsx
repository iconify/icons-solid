import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/o/ow5tq3ndf.css';
import '../../css/l/ls92tot9h.css';
import '../../css/g/g0ojxrcrz.css';
import '../../css/j/j8-blibdk.css';
import '../../css/f/fwoblxbmv.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="ow5tq3ndf"/><path class="ls92tot9h"/><path class="g0ojxrcrz"/><path class="j8-blibdk"/><path class="fwoblxbmv"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-montenegro"} {...others} />);
}

export default Component;
