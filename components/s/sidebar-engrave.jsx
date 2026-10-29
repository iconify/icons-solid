import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sqojf1bzw.css';
import '../../css/o/o9zlyg2gf.css';
import '../../css/a/ao21d5blb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sqojf1bzw"/><path class="o9zlyg2gf wm-shadow"/><path class="ao21d5blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sidebar-engrave"} {...others} />);
}

export default Component;
