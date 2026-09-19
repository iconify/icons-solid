import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqxji9yws.css';
import '../../css/o/otvmc61gw.css';
import '../../css/n/ngxz40b9g.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mqxji9yws"/><path clip-rule="evenodd" class="otvmc61gw"/><path class="ngxz40b9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:calculator-print"} {...others} />);
}

export default Component;
