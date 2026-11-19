import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp8tilbpq.css';
import '../../css/c/c4zxi8b3z.css';
import '../../css/r/ru30ff2ss.css';
import '../../css/y/y9wa8i_1u.css';
import '../../css/p/pyh380b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xp8tilbpq"/><path class="c4zxi8b3z"/><path class="ru30ff2ss"/><path class="y9wa8i_1u"/><path class="pyh380b_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cow"} {...others} />);
}

export default Component;
