import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_l0aknxj.css';
import '../../css/s/swzg2cbsx.css';
import '../../css/f/fpkymacnh.css';
import '../../css/c/c_l5apb5c.css';
import '../../css/u/u1_5eacmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c_l0aknxj"/><path class="swzg2cbsx"/><path class="fpkymacnh"/><path class="c_l5apb5c"/><path class="u1_5eacmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hamburger"} {...others} />);
}

export default Component;
