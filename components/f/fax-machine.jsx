import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvshjly2s.css';
import '../../css/i/i9spx4bqa.css';
import '../../css/s/spqk6-bug.css';
import '../../css/n/nbb0gybzy.css';
import '../../css/t/tl4m54bkf.css';
import '../../css/d/ds54reboi.css';
import '../../css/v/vr9hn5bcc.css';
import '../../css/l/l-fewec-m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xvshjly2s"/><path class="i9spx4bqa"/><path class="spqk6-bug"/><path class="nbb0gybzy"/><path class="tl4m54bkf"/><path class="ds54reboi"/><path class="vr9hn5bcc"/><path class="l-fewec-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fax-machine"} {...others} />);
}

export default Component;
