import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpvzpjw5o.css';
import '../../css/k/kbctr86rm.css';
import '../../css/x/xf4ep6bbe.css';
import '../../css/g/g76p9obpb.css';
import '../../css/v/vy_4xwwcl.css';
import '../../css/x/xdew7-lst.css';
import '../../css/e/eodvtfbql.css';
import '../../css/b/bs0x6gb-t.css';
import '../../css/n/nbdrulbwg.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVG5dy4VqoA" cx="79.8" cy="69.8" r="132.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="dpvzpjw5o"/><stop offset=".85" class="kbctr86rm"/><stop offset="1" class="kbctr86rm"/></radialGradient></defs><path class="xf4ep6bbe"/><path fill="url(#SVG5dy4VqoA)" transform="matrix(2.7 0 0 2.7 -16.873 -16.873)" class="g76p9obpb"/><path class="vy_4xwwcl"/><path class="xdew7-lst"/><path class="eodvtfbql"/><path class="bs0x6gb-t"/><path class="nbdrulbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:triangular-ruler"} {...others} />);
}

export default Component;
