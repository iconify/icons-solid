import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nde522b_j.css';
import '../../css/n/njbbtv2nf.css';
import '../../css/x/xsmx0tbhg.css';
import '../../css/t/tawslrbme.css';
import '../../css/g/gvabyobue.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nde522b_j"/><path class="njbbtv2nf"/><path class="xsmx0tbhg"/><path class="tawslrbme"/><path class="gvabyobue"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:genderfluid"} {...others} />);
}

export default Component;
