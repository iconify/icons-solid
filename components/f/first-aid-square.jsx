import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vycdnf_th.css';
import '../../css/b/b-bx3wb2x.css';
import '../../css/v/v1c18gb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vycdnf_th"/><path class="b-bx3wb2x"/><path class="v1c18gb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:first-aid-square"} {...others} />);
}

export default Component;
