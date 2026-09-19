import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrm3znzjd.css';
import '../../css/d/df_tivw5m.css';
import '../../css/k/k49vcuboj.css';
import '../../css/m/ml4iam-lz.css';
import '../../css/h/h0cgywbaa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vrm3znzjd"/><path class="df_tivw5m"/><path class="k49vcuboj"/><path class="ml4iam-lz"/><path class="h0cgywbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:falafel"} {...others} />);
}

export default Component;
