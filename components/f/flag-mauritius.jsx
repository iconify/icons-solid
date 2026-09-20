import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/e/ewnlplbvw.css';
import '../../css/p/pfo-r6bra.css';
import '../../css/i/iybas7bah.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="ewnlplbvw"/><path class="pfo-r6bra"/><path class="iybas7bah"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-mauritius"} {...others} />);
}

export default Component;
