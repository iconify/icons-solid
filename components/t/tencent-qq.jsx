import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evr01px2z.css';
import '../../css/g/gousmcrku.css';
import '../../css/c/c9bx1tjcv.css';
import '../../css/w/wrvt_6b3v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="evr01px2z"/><path clip-rule="evenodd" class="gousmcrku"/><path class="c9bx1tjcv"/><path class="wrvt_6b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tencent-qq"} {...others} />);
}

export default Component;
