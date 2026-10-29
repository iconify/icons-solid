import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxr8kiblz.css';
import '../../css/j/jqapkrb-k.css';
import '../../css/u/uovg1gb-b.css';
import '../../css/t/tba_z41rt.css';
import '../../css/c/cdxhv1brh.css';
import '../../css/i/ioqwddbek.css';
import '../../css/k/kcrpaf0ot.css';
import '../../css/c/ci1w3_1-y.css';
import '../../css/j/jlyly_lnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gxr8kiblz wm-shadow"/><path class="jqapkrb-k wm-shadow"/><path class="uovg1gb-b"/><path class="tba_z41rt"/><path class="cdxhv1brh"/><path class="ioqwddbek"/><path class="kcrpaf0ot wm-shine"/><path class="ci1w3_1-y wm-shine"/><path class="jlyly_lnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:bluetooth"} {...others} />);
}

export default Component;
