import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wsf49v6wa.css';
import '../../css/f/fqr-13b3j.css';
import '../../css/d/drep_nb0g.css';
import '../../css/j/j-9wjbc3x.css';
import '../../css/w/wmfjrcoyz.css';
import '../../css/m/mjwqnzduz.css';
import '../../css/u/upujvc8hr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wsf49v6wa"/><path class="fqr-13b3j"/><path class="drep_nb0g wm-shine"/><path class="j-9wjbc3x"/><path class="wmfjrcoyz"/><path class="mjwqnzduz"/><path class="upujvc8hr wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:book"} {...others} />);
}

export default Component;
