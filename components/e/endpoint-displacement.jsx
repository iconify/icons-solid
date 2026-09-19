import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfvz4yn7t.css';
import '../../css/n/nilelnbhx.css';
import '../../css/z/zrxbbl9mo.css';
import '../../css/u/umm845b2s.css';
import '../../css/n/n0t09jngj.css';
import '../../css/q/qpih_-b0i.css';
import '../../css/t/tluyrbc4c.css';
import '../../css/y/y27iitbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hfvz4yn7t"/><path class="nilelnbhx"/><path class="zrxbbl9mo"/><path class="umm845b2s"/><path class="n0t09jngj"/><path class="qpih_-b0i"/><path class="tluyrbc4c"/><path class="y27iitbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:endpoint-displacement"} {...others} />);
}

export default Component;
