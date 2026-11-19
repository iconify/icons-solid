import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/z/z4zv68m0t.css';
import '../../css/p/p74anlbhw.css';
import '../../css/m/mlkzt5b2u.css';
import '../../css/u/uj3e_gbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yk8wpcb-k"/><path class="z4zv68m0t"/><path class="p74anlbhw"/><circle class="mlkzt5b2u"/><path class="uj3e_gbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-at"} {...others} />);
}

export default Component;
