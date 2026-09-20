import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4sq5-21o.css';
import '../../css/a/avxntqaav.css';
import '../../css/t/tcip2z32x.css';
import '../../css/c/cos6pws6m.css';
import '../../css/e/ewkgpzb1m.css';
import '../../css/t/tj0g96yce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d4sq5-21o"/><path class="avxntqaav"/><path class="tcip2z32x"/><path class="cos6pws6m"/><path class="ewkgpzb1m"/><path class="tj0g96yce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:new-document-layer"} {...others} />);
}

export default Component;
