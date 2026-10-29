import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltgq5bcws.css';
import '../../css/l/l1n7299ml.css';
import '../../css/r/rkjwahbeo.css';
import '../../css/y/y3j5m8vfj.css';
import '../../css/b/bvlnell-v.css';
import '../../css/a/a8q6mabab.css';
import '../../css/m/m93p2sbln.css';
import '../../css/a/akgb4fb4v.css';
import '../../css/t/trq__1b8e.css';
import '../../css/l/llpvcn92a.css';
import '../../css/c/cx5vrrfrt.css';
import '../../css/f/fi7apoc-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltgq5bcws wm-shadow"/><path class="l1n7299ml wm-k"/><path class="rkjwahbeo wm-k"/><path class="wm-k y3j5m8vfj"/><path class="bvlnell-v wm-k"/><path class="a8q6mabab wm-shine"/><path class="m93p2sbln wm-k"/><path class="akgb4fb4v wm-a"/><path class="trq__1b8e wm-a"/><path class="llpvcn92a wm-a"/><path class="cx5vrrfrt wm-a"/><path class="fi7apoc-i wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:undo"} {...others} />);
}

export default Component;
