import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/o/o2wpyhb8a.css';
import '../../css/y/yz-cuiy2v.css';
import '../../css/t/tu0d1ccex.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="o2wpyhb8a"/><path clip-rule="evenodd" class="yz-cuiy2v"/><path class="tu0d1ccex"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:file-circle-filled"} {...others} />);
}

export default Component;
