import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k178jpbdb.css';
import '../../css/w/w1v4elx0x.css';
import '../../css/p/ptzmp8bkz.css';
import '../../css/b/b4gq1mb3p.css';

const viewBox = {"width":1000,"height":265.1};
const content = `<g class="k178jpbdb"><path class="w1v4elx0x"/><path class="ptzmp8bkz"/><path class="b4gq1mb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:office-depot"} {...others} />);
}

export default Component;
