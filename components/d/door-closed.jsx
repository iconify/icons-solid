import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9tw93bon.css';
import '../../css/c/c3m2_3lle.css';
import '../../css/p/p-0h43bay.css';
import '../../css/k/kvq382brs.css';
import '../../css/x/xkqr-ccha.css';
import '../../css/w/wgnqp4bky.css';
import '../../css/t/ti8wpvbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a9tw93bon wm-k"/><path class="c3m2_3lle wm-k"/><path class="p-0h43bay wm-k"/><path class="kvq382brs wm-k"/><path class="wm-shine xkqr-ccha"/><path class="wgnqp4bky wm-k"/><path class="ti8wpvbfu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:door-closed"} {...others} />);
}

export default Component;
