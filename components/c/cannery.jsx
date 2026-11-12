import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7r4axb8x.css';
import '../../css/y/y6j22ella.css';
import '../../css/v/v_kg5ixqy.css';
import '../../css/g/g5oz29bhy.css';
import '../../css/b/bjm0estaa.css';
import '../../css/d/dvd3cxb8m.css';
import '../../css/w/wydrjdjqr.css';
import '../../css/a/asvmtp1fs.css';
import '../../css/j/ja-xt7wcc.css';
import '../../css/y/yqyqjib1x.css';
import '../../css/g/gc1r21bsl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x7r4axb8x"/><path class="y6j22ella"/><path class="v_kg5ixqy"/><path class="g5oz29bhy"/><path class="bjm0estaa"/><path class="dvd3cxb8m"/><path class="wydrjdjqr"/><path class="asvmtp1fs"/><path class="ja-xt7wcc"/><path class="yqyqjib1x"/><path class="gc1r21bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cannery"} {...others} />);
}

export default Component;
