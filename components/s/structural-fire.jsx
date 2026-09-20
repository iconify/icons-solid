import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij8o1qeaw.css';
import '../../css/e/eqq_e878i.css';
import '../../css/q/qx1fvpmmp.css';
import '../../css/o/ofo136byv.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f77bf5b2b.css';
import '../../css/l/lv8clj1ie.css';
import '../../css/l/lzy4dacgb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ij8o1qeaw"/><path class="eqq_e878i"/><path class="qx1fvpmmp"/><path class="ofo136byv"/><g class="jn8qy4bru"><path class="f77bf5b2b"/><path class="lv8clj1ie"/><path class="lzy4dacgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:structural-fire"} {...others} />);
}

export default Component;
