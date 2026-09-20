import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lckiq8b2e.css';
import '../../css/f/f85zwlb2a.css';
import '../../css/a/aezjiru0m.css';
import '../../css/c/cj9ohf5be.css';
import '../../css/n/nkqddl_8q.css';
import '../../css/r/rdokzzybn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lckiq8b2e"/><path class="f85zwlb2a"/><path class="aezjiru0m"/><path class="cj9ohf5be"/><path class="nkqddl_8q"/><path class="rdokzzybn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pictures-folder-memories"} {...others} />);
}

export default Component;
