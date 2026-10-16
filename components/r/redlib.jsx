import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqu2_e4mu.css';
import '../../css/x/xqvmvkbpa.css';
import '../../css/g/g-eromb9s.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="matrix(1 0 0 -1 0 512)"><circle class="pqu2_e4mu"/><path class="xqvmvkbpa"/><path class="g-eromb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:redlib"} {...others} />);
}

export default Component;
