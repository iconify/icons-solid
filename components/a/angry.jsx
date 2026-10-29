import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnfelhtqv.css';
import '../../css/v/v-4gs6xyd.css';
import '../../css/i/ilyscnyof.css';
import '../../css/a/alwdr1bnf.css';
import '../../css/s/swu21smev.css';
import '../../css/y/y8wiycc3n.css';
import '../../css/e/e8oyx_b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mnfelhtqv wm-k"/><path class="v-4gs6xyd wm-k"/><path class="ilyscnyof wm-k"/><path class="alwdr1bnf wm-shine"/><path class="swu21smev wm-a"/><path class="wm-shine y8wiycc3n"/><path class="e8oyx_b4n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:angry"} {...others} />);
}

export default Component;
