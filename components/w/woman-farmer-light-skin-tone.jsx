import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6a1l8x7b.css';
import '../../css/s/sn8ccsmky.css';
import '../../css/t/ted2x9b4x.css';
import '../../css/z/zxf1n92av.css';
import '../../css/f/fgsj3mb-u.css';
import '../../css/p/p0gn62biz.css';
import '../../css/r/r37-s52mk.css';
import '../../css/d/d9plkx-fy.css';
import '../../css/n/n1rkr7bxi.css';
import '../../css/v/vs-7kbcri.css';
import '../../css/b/b7hgdjd1n.css';
import '../../css/g/g_pisnbdf.css';
import '../../css/n/n2thj005d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z6a1l8x7b"/><path class="sn8ccsmky"/><path class="ted2x9b4x"/><path class="zxf1n92av"/><path class="fgsj3mb-u"/><path class="p0gn62biz"/><path class="r37-s52mk"/><path class="d9plkx-fy"/><path class="n1rkr7bxi"/><path class="vs-7kbcri"/><path class="b7hgdjd1n"/><path class="g_pisnbdf"/><path class="n2thj005d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-farmer-light-skin-tone"} {...others} />);
}

export default Component;
