import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/moruyr3gw.css';
import '../../css/s/sunmddcgj.css';
import '../../css/c/c0m8i--rf.css';
import '../../css/p/pty22pbyc.css';
import '../../css/n/nengl2b3m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="moruyr3gw"/><path class="sunmddcgj"/><circle class="c0m8i--rf"/><circle class="pty22pbyc"/><circle class="nengl2b3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pear"} {...others} />);
}

export default Component;
