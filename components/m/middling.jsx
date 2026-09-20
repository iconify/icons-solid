import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncjysacrn.css';
import '../../css/m/mcrk-8rcw.css';
import '../../css/z/zr763ccpc.css';
import '../../css/z/zeqjldbtn.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ncjysacrn"/><circle class="mcrk-8rcw"/><circle class="zr763ccpc"/><path class="zeqjldbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:middling"} {...others} />);
}

export default Component;
