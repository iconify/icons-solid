import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tglxzvbqv.css';
import '../../css/w/wd84n_baq.css';
import '../../css/i/inro79bve.css';
import '../../css/t/twegkvbfq.css';
import '../../css/p/pcdyyib2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tglxzvbqv wm-shadow"/><path class="wd84n_baq wm-shadow"/><path class="inro79bve"/><path class="twegkvbfq"/><path class="pcdyyib2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hand-heart"} {...others} />);
}

export default Component;
