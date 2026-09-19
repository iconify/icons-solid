import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jy1imkqad.css';
import '../../css/m/mi75xbcwx.css';
import '../../css/o/oczsqr1do.css';
import '../../css/l/l9ul_bcga.css';
import '../../css/t/tgiuuc7fp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="jy1imkqad"/><path class="mi75xbcwx"/><path class="oczsqr1do"/><path class="l9ul_bcga"/><path class="tgiuuc7fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:one-to-one"} {...others} />);
}

export default Component;
