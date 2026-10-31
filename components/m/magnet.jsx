import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d_p4q4b6c.css';
import '../../css/p/pmfb0562b.css';
import '../../css/y/yof_2bces.css';
import '../../css/x/xu_kh9x1i.css';
import '../../css/f/fcpcu9i2b.css';
import '../../css/w/wrrvl7ncu.css';
import '../../css/j/j1hn5vbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d_p4q4b6c"/><path class="pmfb0562b"/><path class="wm-shine yof_2bces"/><path class="wm-k xu_kh9x1i"/><path class="fcpcu9i2b wm-a"/><path class="wrrvl7ncu"/><path class="j1hn5vbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:magnet"} {...others} />);
}

export default Component;
