import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/i5ynusb3t.css';
import '../../css/u/uuot_-brf.css';
import '../../css/b/b12fkkbvt.css';
import '../../css/d/d76-5hmau.css';
import '../../css/z/zslw-jbti.css';
import '../../css/g/g07kgbb_e.css';
import '../../css/c/cb00a9mur.css';
import '../../css/v/vbv9ucbpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="i5ynusb3t"/><path class="uuot_-brf"/><path class="b12fkkbvt"/><path class="d76-5hmau"/><path class="zslw-jbti"/><path class="g07kgbb_e"/><path class="cb00a9mur"/><path class="vbv9ucbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:general-branch"} {...others} />);
}

export default Component;
