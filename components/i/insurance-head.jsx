import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbq80cc1y.css';
import '../../css/c/c4w6c5bzf.css';
import '../../css/o/oq8mrccyt.css';
import '../../css/r/ry6s-jmdd.css';
import '../../css/w/wm_cwdb2t.css';
import '../../css/g/gyonj_0bc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fbq80cc1y"/><path class="c4w6c5bzf"/><path class="oq8mrccyt"/><path class="ry6s-jmdd"/><path class="wm_cwdb2t"/><path class="gyonj_0bc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:insurance-head"} {...others} />);
}

export default Component;
