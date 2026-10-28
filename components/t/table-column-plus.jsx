import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxorirb4b.css';
import '../../css/t/to0pi9tnk.css';
import '../../css/m/mr89aqbbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxorirb4b"/><path class="to0pi9tnk"/><rect transform="matrix(0 -1 -1 0 9.76 21.24)" class="mr89aqbbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-column-plus"} {...others} />);
}

export default Component;
