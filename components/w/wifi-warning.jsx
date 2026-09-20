import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exuzr9rvl.css';
import '../../css/t/trker1psf.css';
import '../../css/z/z2y4fob6b.css';
import '../../css/n/nv6xjnnui.css';
import '../../css/v/vw80cjb0c.css';
import '../../css/f/f59b3zb3q.css';
import '../../css/q/qs805_1gx.css';
import '../../css/n/n6-94kbhx.css';
import '../../css/j/jkwdh1eit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="exuzr9rvl"/><path class="trker1psf"/><path class="z2y4fob6b"/><path class="nv6xjnnui"/><path class="vw80cjb0c"/><path class="f59b3zb3q"/><path class="qs805_1gx"/><path class="n6-94kbhx"/><path class="jkwdh1eit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wifi-warning"} {...others} />);
}

export default Component;
