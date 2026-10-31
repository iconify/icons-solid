import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l4ns8wu7r.css';
import '../../css/p/p0_li50bq.css';
import '../../css/s/syvzxixou.css';
import '../../css/a/amkbsmbvf.css';
import '../../css/b/b2bf7eb7x.css';
import '../../css/r/rysun9bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l4ns8wu7r wm-shadow"/><path class="p0_li50bq"/><path class="syvzxixou"/><path class="amkbsmbvf"/><path class="b2bf7eb7x"/><path class="rysun9bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-pie"} {...others} />);
}

export default Component;
