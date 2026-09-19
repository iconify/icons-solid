import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp16bptoo.css';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/x/xnzk_khna.css';
import '../../css/r/r8actjfja.css';
import '../../css/d/da_b2flsj.css';

const viewBox = {"width":32,"height":24};
const content = `<mask id="SVGrhc1Jeoq" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="rp16bptoo"/></mask><g clip-rule="evenodd" mask="url(#SVGrhc1Jeoq)" class="bi12bsetm"><path class="umbnhhb9z"/><path class="xnzk_khna"/><path class="r8actjfja"/><path class="da_b2flsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ps"} {...others} />);
}

export default Component;
