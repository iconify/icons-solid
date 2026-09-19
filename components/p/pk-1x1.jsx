import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/p/p6tbamyjw.css';
import '../../css/e/el0zi8bck.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/v7kxnoc1b.css';
import '../../css/q/q7wkwycjy.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="nv9qcacyl"><path class="p6tbamyjw"/><path class="el0zi8bck"/><g class="n1mjunbsu"><path class="v7kxnoc1b"/><path class="q7wkwycjy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pk-1x1"} {...others} />);
}

export default Component;
