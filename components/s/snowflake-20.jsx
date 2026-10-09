import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgnbte-qu.css';
import '../../css/c/cxtw4ab8u.css';
import '../../css/c/c2pyp_bvu.css';
import '../../css/h/hmxq_r-te.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zgnbte-qu"/><path class="cxtw4ab8u"/><path class="c2pyp_bvu"/><path class="hmxq_r-te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowflake-20"} {...others} />);
}

export default Component;
