import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aun3_q3hq.css';
import '../../css/t/tt7zy3ymd.css';
import '../../css/m/mr89aqbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aun3_q3hq"/><path class="tt7zy3ymd"/><rect transform="matrix(1 0 0 -1 2.46 10.06)" class="mr89aqbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-row-x"} {...others} />);
}

export default Component;
