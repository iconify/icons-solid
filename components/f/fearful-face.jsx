import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8xequ2kf.css';
import '../../css/i/ineng-zmr.css';
import '../../css/l/lcykpmw0z.css';
import '../../css/o/osvg_sb1z.css';
import '../../css/o/of0z3gb9t.css';
import '../../css/x/xbjbpobcc.css';
import '../../css/c/cwa8r9uhi.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGbU4bPbLA" class="i8xequ2kf"/></defs><use href="#SVGbU4bPbLA"/><path class="ineng-zmr"/><path class="lcykpmw0z"/><use href="#SVGbU4bPbLA"/><path class="osvg_sb1z"/><circle class="of0z3gb9t"/><path class="xbjbpobcc"/><path class="cwa8r9uhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fearful-face"} {...others} />);
}

export default Component;
