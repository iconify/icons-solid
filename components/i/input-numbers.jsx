import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dluanabqy.css';
import '../../css/n/naeprdbjc.css';
import '../../css/a/abc-_riwo.css';
import '../../css/x/xrvzlggpv.css';
import '../../css/g/gxucjjbuw.css';
import '../../css/c/cfrb6cbcz.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="dluanabqy"/><path class="naeprdbjc"/><path class="abc-_riwo"/><path class="xrvzlggpv"/><path class="gxucjjbuw"/><path class="cfrb6cbcz"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:input-numbers"} {...others} />);
}

export default Component;
