import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coubpfeoh.css';
import '../../css/r/rp4rwvb8v.css';
import '../../css/b/bozypcc4v.css';
import '../../css/a/aamlh1b6q.css';
import '../../css/b/brykjacoj.css';
import '../../css/w/wid4vlbjt.css';
import '../../css/o/owgv9f6yi.css';

const viewBox = {"width":192,"height":192};
const content = `<path class="coubpfeoh"/><path class="rp4rwvb8v"/><path class="bozypcc4v"/><path class="aamlh1b6q"/><path class="brykjacoj"/><path class="wid4vlbjt"/><path class="owgv9f6yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-workspace-editors"} {...others} />);
}

export default Component;
