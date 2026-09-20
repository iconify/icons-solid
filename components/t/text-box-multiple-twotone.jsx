import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr9edz.css';
import '../../css/i/iw1iew.css';
import '../../css/q/qt-lwl.css';
import '../../css/y/y4wbml.css';
import '../../css/q/qn6s_n.css';
import '../../css/n/n0tjee.css';
import '../../css/e/e63hbv.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pfv47w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr9edz iw1iew"/><path class="iw1iew qt-lwl y4wbml"/><path class="iw1iew qn6s_n y4wbml"/><path class="iw1iew n0tjee y4wbml"/><path class="e63hbv iw1iew y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-multiple-twotone"} {...others} />);
}

export default Component;
