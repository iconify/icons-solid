import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xd6c8kbfg.css';
import '../../css/l/l7ulmebef.css';
import '../../css/e/e36b-nb_s.css';
import '../../css/c/crdid7b4g.css';
import '../../css/o/oiscke4sl.css';
import '../../css/v/vhsgr8thb.css';
import '../../css/v/v79ks6bob.css';
import '../../css/c/cq9jibceb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xd6c8kbfg"/><path class="l7ulmebef wm-k"/><path class="e36b-nb_s wm-k"/><path class="crdid7b4g wm-shine"/><path class="oiscke4sl wm-k"/><path class="vhsgr8thb wm-k"/><path class="v79ks6bob wm-a"/><path class="cq9jibceb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:gem"} {...others} />);
}

export default Component;
