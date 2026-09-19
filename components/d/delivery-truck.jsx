import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dsr-lzblf.css';
import '../../css/s/s547hnb5b.css';
import '../../css/o/o441xwb_o.css';
import '../../css/k/khc8bcbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dsr-lzblf"/><path class="s547hnb5b"/><path class="o441xwb_o"/><path class="khc8bcbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:delivery-truck"} {...others} />);
}

export default Component;
