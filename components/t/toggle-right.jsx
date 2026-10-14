import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a0y-inb-l.css';
import '../../css/t/tnj09sqey.css';
import '../../css/i/is6gckbui.css';
import '../../css/n/nsdw83beg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="a0y-inb-l"/><path class="tnj09sqey"/><path class="is6gckbui"/><path class="nsdw83beg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:toggle-right"} {...others} />);
}

export default Component;
