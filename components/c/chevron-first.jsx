import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6rjlny9y.css';
import '../../css/d/dcduuohel.css';
import '../../css/l/lfpiahbtu.css';
import '../../css/n/nd2iuvb7d.css';
import '../../css/u/uefgkiiya.css';
import '../../css/y/yrvjv1bai.css';
import '../../css/b/bbrzzvz_s.css';
import '../../css/n/nb8ld1krm.css';
import '../../css/j/j07xsx39a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow x6rjlny9y"/><path class="dcduuohel wm-shadow"/><path class="lfpiahbtu"/><path class="nd2iuvb7d"/><path class="uefgkiiya"/><path class="yrvjv1bai"/><path class="bbrzzvz_s wm-shine"/><path class="nb8ld1krm wm-shine"/><path class="j07xsx39a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevron-first"} {...others} />);
}

export default Component;
