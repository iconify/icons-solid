import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jbcquhcbm.css';
import '../../css/m/md286fbip.css';
import '../../css/h/hjyf7p0pe.css';
import '../../css/u/ulnqukbhs.css';
import '../../css/m/mevz94bei.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="jbcquhcbm"/><g class="md286fbip"><path class="hjyf7p0pe"/><path class="ulnqukbhs"/><path class="mevz94bei"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zest"} {...others} />);
}

export default Component;
