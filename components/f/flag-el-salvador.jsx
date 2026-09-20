import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/r/r73utib8z.css';
import '../../css/q/qfvvu5w-c.css';
import '../../css/r/rkeorib6d.css';
import '../../css/a/a0bh4-bmv.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="r73utib8z"/><path class="qfvvu5w-c"/><circle class="rkeorib6d"/><path class="a0bh4-bmv"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-el-salvador"} {...others} />);
}

export default Component;
