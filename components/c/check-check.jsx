import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajkh56jez.css';
import '../../css/q/qqtms-hqh.css';
import '../../css/e/etaoo_l4n.css';
import '../../css/z/z-mlyhb3g.css';
import '../../css/x/xth14rb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajkh56jez wm-shadow"/><path class="qqtms-hqh wm-k"/><path class="etaoo_l4n wm-k"/><path class="wm-a z-mlyhb3g"/><path class="wm-a xth14rb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:check-check"} {...others} />);
}

export default Component;
