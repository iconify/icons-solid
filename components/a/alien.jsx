import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abp66bccv.css';
import '../../css/l/lbxq68bjj.css';
import '../../css/o/oa06op6-i.css';
import '../../css/b/b5kcsg5uj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="abp66bccv"/><path class="lbxq68bjj"/><path class="oa06op6-i"/><path class="b5kcsg5uj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:alien"} {...others} />);
}

export default Component;
