import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4at4fb-j.css';
import '../../css/m/m2s2ijb7o.css';
import '../../css/s/s25lwwbet.css';
import '../../css/p/ppsfdtbll.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g4at4fb-j"/><path class="m2s2ijb7o"/><path class="s25lwwbet"/><path class="ppsfdtbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:earpods"} {...others} />);
}

export default Component;
