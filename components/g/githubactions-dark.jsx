import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/n/nqoebymvf.css';
import '../../css/o/ol7sdg8de.css';
import '../../css/o/orl056bab.css';
import '../../css/d/d-d9y237a.css';
import '../../css/f/fo1fwybqj.css';
import '../../css/j/jrfd9deuw.css';
import '../../css/k/knhp5qaxe.css';
import '../../css/j/jv_2cdbkj.css';
import '../../css/l/l0l74bblp.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="nqoebymvf"/><path clip-rule="evenodd" class="ol7sdg8de"/><path class="orl056bab"/><path clip-rule="evenodd" class="d-d9y237a"/><path class="fo1fwybqj"/><path class="jrfd9deuw"/><path class="knhp5qaxe"/><path clip-rule="evenodd" class="jv_2cdbkj"/><path class="l0l74bblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:githubactions-dark"} {...others} />);
}

export default Component;
