import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/v/v0hz1g5iy.css';
import '../../css/k/kz5bt151v.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgf_i8bzy.css';
import '../../css/x/xaeu_hbkf.css';
import '../../css/e/efaghzbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGBwsjVIII" width="18" height="19" x="3" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="v0hz1g5iy"/><path class="kz5bt151v"/></mask><g class="ft5dv1b6b"><path class="wgf_i8bzy"/><path mask="url(#SVGBwsjVIII)" class="xaeu_hbkf"/><path class="efaghzbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chield-check-duotone-line"} {...others} />);
}

export default Component;
