import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/z/z51mj2nbz.css';
import '../../css/z/z6g585zyw.css';
import '../../css/d/dbkz5gqwv.css';
import '../../css/v/vw_tqwb3j.css';
import '../../css/r/rfn52jbce.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="z51mj2nbz"/><path class="z6g585zyw"/><path class="dbkz5gqwv"/><path class="vw_tqwb3j"/><circle class="rfn52jbce"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-north-macedonia"} {...others} />);
}

export default Component;
