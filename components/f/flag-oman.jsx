import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/b/b778kib9g.css';
import '../../css/r/rrfyfxb_f.css';
import '../../css/v/vet2x-ame.css';
import '../../css/d/dlrjxpbzv.css';
import '../../css/c/cy_f3pe8q.css';
import '../../css/q/qr8ko-blz.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="b778kib9g"/><path class="rrfyfxb_f"/><path class="vet2x-ame"/><g class="dlrjxpbzv"><path class="cy_f3pe8q"/><path class="qr8ko-blz"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-oman"} {...others} />);
}

export default Component;
