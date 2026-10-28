import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf9p-qb1b.css';
import '../../css/f/f3km4hxoo.css';
import '../../css/z/z-2k7zbqa.css';
import '../../css/y/y3vpmtb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="vf9p-qb1b"/><circle class="f3km4hxoo"/><path class="z-2k7zbqa"/><path class="y3vpmtb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:walk"} {...others} />);
}

export default Component;
