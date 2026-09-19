import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqsfi3h_c.css';
import '../../css/o/odagib8gx.css';
import '../../css/v/v8a3itb2d.css';
import '../../css/h/hvh-41bsq.css';
import '../../css/p/pmexm0tfy.css';
import '../../css/f/f-24nviip.css';
import '../../css/a/a9lrpnb-c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iqsfi3h_c"/><path class="odagib8gx"/><path class="v8a3itb2d"/><path class="hvh-41bsq"/><path class="pmexm0tfy"/><path class="f-24nviip"/><path class="a9lrpnb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:train"} {...others} />);
}

export default Component;
