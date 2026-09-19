import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/so5sn_m9u.css';
import '../../css/g/g8eb7ob4r.css';
import '../../css/a/ab_xoeb_t.css';
import '../../css/g/gh6ivvbcn.css';
import '../../css/z/zn-a8uh2a.css';
import '../../css/g/gleo2ublq.css';
import '../../css/i/iyngdacdn.css';
import '../../css/s/sp1pr6blf.css';
import '../../css/i/idzit3wws.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="so5sn_m9u"/><path class="g8eb7ob4r"/><path class="ab_xoeb_t"/><path class="gh6ivvbcn"/><path class="zn-a8uh2a"/><path class="gleo2ublq"/><path class="iyngdacdn"/><path class="sp1pr6blf"/><path class="idzit3wws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mountain-railway"} {...others} />);
}

export default Component;
