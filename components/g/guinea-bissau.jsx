import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_r5q0dsm.css';
import '../../css/a/asx311clm.css';
import '../../css/b/b92s40z-u.css';
import '../../css/x/xzv3zt58w.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="k_r5q0dsm"/><path class="asx311clm"/><path class="b92s40z-u"/><path class="xzv3zt58w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:guinea-bissau"} {...others} />);
}

export default Component;
