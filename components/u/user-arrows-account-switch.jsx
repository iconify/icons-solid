import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/z96qxbbwf.css';
import '../../css/i/i83-wmb2c.css';
import '../../css/f/fk1zo3byg.css';
import '../../css/g/gbu__qb_x.css';
import '../../css/w/wq3ajib2r.css';
import '../../css/q/qgpqfhiem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="z96qxbbwf"/><path class="i83-wmb2c"/><path class="fk1zo3byg"/><path class="gbu__qb_x"/><path class="wq3ajib2r"/><path class="qgpqfhiem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-arrows-account-switch"} {...others} />);
}

export default Component;
