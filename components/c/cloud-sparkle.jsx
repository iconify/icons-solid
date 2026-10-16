import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyc2ucc0u.css';
import '../../css/p/p5l_j20jg.css';
import '../../css/i/ia6bwytul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tyc2ucc0u"/><path class="p5l_j20jg"/><path class="ia6bwytul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-sparkle"} {...others} />);
}

export default Component;
