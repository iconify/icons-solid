import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b0l52zb1j.css';
import '../../css/u/ui_lws96b.css';
import '../../css/y/yl22r9bbu.css';
import '../../css/c/cdc_phbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b0l52zb1j"/><path class="ui_lws96b"/><path class="wm-a yl22r9bbu"/><path class="cdc_phbqy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wallet-cards"} {...others} />);
}

export default Component;
