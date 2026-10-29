import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-5zivrpk.css';
import '../../css/u/um5lq5bui.css';
import '../../css/m/m7hbz8brm.css';
import '../../css/m/mz-qn0yjz.css';
import '../../css/d/dch99legr.css';
import '../../css/e/e7drlcbim.css';
import '../../css/x/xdb-mac6s.css';
import '../../css/j/j96s7_bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-5zivrpk wm-shadow"/><path class="um5lq5bui wm-k"/><path class="m7hbz8brm wm-k"/><path class="mz-qn0yjz wm-k"/><path class="dch99legr wm-k"/><path class="e7drlcbim wm-k"/><path class="wm-shine xdb-mac6s"/><path class="j96s7_bqt wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:phone-missed"} {...others} />);
}

export default Component;
