import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x83nd5bnd.css';
import '../../css/t/tet0_objy.css';
import '../../css/l/ler2aibxt.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="x83nd5bnd"/><path clip-rule="evenodd" class="tet0_objy"/><path class="ler2aibxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:appwrite"} {...others} />);
}

export default Component;
