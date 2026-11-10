import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf6v_sbqv.css';
import '../../css/b/b-bx3wb2x.css';
import '../../css/b/bx6r8nbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gf6v_sbqv"/><path class="b-bx3wb2x"/><path class="bx6r8nbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:first-aid-square"} {...others} />);
}

export default Component;
