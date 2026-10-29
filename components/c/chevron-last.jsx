import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3trtnbmd.css';
import '../../css/i/iz3l8vb-p.css';
import '../../css/t/t3wwpcbpr.css';
import '../../css/s/snne0dsur.css';
import '../../css/s/smzx6drac.css';
import '../../css/a/adoausbae.css';
import '../../css/v/v0rmp5bog.css';
import '../../css/n/nwkcdlb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g3trtnbmd wm-k"/><path class="iz3l8vb-p wm-k"/><path class="t3wwpcbpr wm-k"/><path class="snne0dsur wm-shine"/><path class="smzx6drac wm-k"/><path class="adoausbae wm-k"/><path class="v0rmp5bog wm-k"/><path class="nwkcdlb_l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevron-last"} {...others} />);
}

export default Component;
