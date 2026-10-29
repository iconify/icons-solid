import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt6udtb9q.css';
import '../../css/m/mysax5ftz.css';
import '../../css/v/v63c6sbqf.css';
import '../../css/h/hk2w1hb6l.css';
import '../../css/a/ax0wyb-ly.css';
import '../../css/m/ml1cpgbmd.css';
import '../../css/y/y2mhzdb7f.css';
import '../../css/n/nimisx14z.css';
import '../../css/c/cvnr1nbpm.css';
import '../../css/u/ub1krkbuu.css';
import '../../css/g/g-uoqsbhk.css';
import '../../css/i/iydjn2bpd.css';
import '../../css/u/uyb4imw0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt6udtb9q wm-shadow"/><path class="mysax5ftz wm-k"/><path class="v63c6sbqf wm-k"/><path class="hk2w1hb6l wm-k"/><path class="ax0wyb-ly wm-k"/><path class="ml1cpgbmd wm-k"/><path class="wm-shine y2mhzdb7f"/><path class="nimisx14z wm-a"/><path class="cvnr1nbpm wm-s"/><path class="ub1krkbuu wm-s"/><path class="g-uoqsbhk wm-s"/><path class="iydjn2bpd wm-s"/><path class="uyb4imw0v wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:paper-fan"} {...others} />);
}

export default Component;
