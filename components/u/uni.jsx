import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zns1uds0y.css';
import '../../css/m/md286fbip.css';
import '../../css/f/fctgmobhd.css';
import '../../css/w/wb8ftfb4k.css';
import '../../css/g/goyzybcsc.css';
import '../../css/r/rjwz6dbkc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="zns1uds0y"/><g class="md286fbip"><path class="fctgmobhd"/><path class="wb8ftfb4k"/><path class="goyzybcsc"/><path class="rjwz6dbkc"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:uni"} {...others} />);
}

export default Component;
