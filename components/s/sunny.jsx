import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/h/hubjnzbmt.css';
import '../../css/q/q0upm5byi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kf0_gw6sp"/><path class="hubjnzbmt"/><path class="q0upm5byi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sunny"} {...others} />);
}

export default Component;
