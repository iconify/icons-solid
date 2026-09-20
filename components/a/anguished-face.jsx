import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9997h4rm.css';
import '../../css/i/ineng-zmr.css';
import '../../css/q/qgh29tbpt.css';
import '../../css/o/of0z3gb9t.css';
import '../../css/i/ih7dl4x3y.css';
import '../../css/c/cwa8r9uhi.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGopWTHdnm" class="b9997h4rm"/></defs><use href="#SVGopWTHdnm"/><path class="ineng-zmr"/><use href="#SVGopWTHdnm"/><path class="qgh29tbpt"/><circle class="of0z3gb9t"/><path class="ih7dl4x3y"/><path class="cwa8r9uhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:anguished-face"} {...others} />);
}

export default Component;
