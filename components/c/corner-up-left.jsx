import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbzam9bpo.css';
import '../../css/r/ra3bdo6rm.css';
import '../../css/s/sv4a6ib3t.css';
import '../../css/c/cc2_5xzjl.css';
import '../../css/r/rttd7xb3j.css';
import '../../css/e/e9pggrbst.css';
import '../../css/z/z7qldfb1u.css';
import '../../css/x/xp4zvfbhi.css';
import '../../css/k/k6ua0nikq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbzam9bpo wm-shadow"/><path class="ra3bdo6rm wm-shadow"/><path class="sv4a6ib3t"/><path class="cc2_5xzjl"/><path class="rttd7xb3j"/><path class="e9pggrbst"/><path class="wm-shine z7qldfb1u"/><path class="wm-shine xp4zvfbhi"/><path class="k6ua0nikq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:corner-up-left"} {...others} />);
}

export default Component;
