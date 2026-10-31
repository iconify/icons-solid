import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d0fwm-byu.css';
import '../../css/m/ml2lq6y_v.css';
import '../../css/a/ao21d5blb.css';
import '../../css/v/v62f1m77i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d0fwm-byu"/><path class="ml2lq6y_v wm-shine"/><path class="ao21d5blb wm-k"/><path class="v62f1m77i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:panel-left-open"} {...others} />);
}

export default Component;
