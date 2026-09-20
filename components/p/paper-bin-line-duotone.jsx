import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/op39z1b0t.css';
import '../../css/f/fjiyggelq.css';
import '../../css/x/xfcsm6b8b.css';
import '../../css/b/bbj_fcggl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="op39z1b0t"/><path class="fjiyggelq"/><path class="xfcsm6b8b"/><path class="bbj_fcggl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paper-bin-line-duotone"} {...others} />);
}

export default Component;
