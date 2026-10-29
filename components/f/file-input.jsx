import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2hayw1qi.css';
import '../../css/x/x9rgjn_aa.css';
import '../../css/n/nna-chrgg.css';
import '../../css/q/q9pkv2ksg.css';
import '../../css/c/c9f8_3bxa.css';
import '../../css/f/f8mc3dzfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k z2hayw1qi"/><path class="wm-k x9rgjn_aa"/><path class="nna-chrgg wm-k"/><path class="q9pkv2ksg wm-k"/><path class="c9f8_3bxa wm-shine"/><path class="f8mc3dzfp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:file-input"} {...others} />);
}

export default Component;
