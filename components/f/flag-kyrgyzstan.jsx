import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/t/t2btn03ba.css';
import '../../css/v/vmjy8_71p.css';
import '../../css/z/zaecr_y5n.css';
import '../../css/x/xt4a9qimp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="t2btn03ba"/><circle class="vmjy8_71p"/><path class="zaecr_y5n"/><path class="xt4a9qimp"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-kyrgyzstan"} {...others} />);
}

export default Component;
