import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n6scesb8l.css';
import '../../css/q/qw263ib7p.css';
import '../../css/q/qwd_m61jb.css';
import '../../css/m/mvv-vwplq.css';
import '../../css/j/jkxkvzmrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n6scesb8l wm-shadow"/><path class="qw263ib7p wm-shadow"/><path class="qwd_m61jb"/><path class="mvv-vwplq"/><path class="jkxkvzmrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fuel"} {...others} />);
}

export default Component;
