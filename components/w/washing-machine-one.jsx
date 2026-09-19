import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ci05-hekc.css';
import '../../css/e/e932blbvr.css';
import '../../css/i/iklpwmb7f.css';
import '../../css/q/qk6k945-k.css';
import '../../css/w/wgd2gjbcv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="ci05-hekc"/><path class="e932blbvr"/><circle class="iklpwmb7f"/><circle class="qk6k945-k"/><circle class="wgd2gjbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:washing-machine-one"} {...others} />);
}

export default Component;
