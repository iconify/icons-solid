import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/c/c2vcrqhfb.css';
import '../../css/x/xpbddjbvs.css';
import '../../css/n/nwj67uefn.css';
import '../../css/f/f6exzvbls.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="umbnhhb9z"/><path class="c2vcrqhfb"/><path class="xpbddjbvs"/><path class="nwj67uefn"/><path class="f6exzvbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:tj"} {...others} />);
}

export default Component;
