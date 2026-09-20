import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/h5h7hcurd.css';
import '../../css/x/x202754nz.css';
import '../../css/u/usy43z5_h.css';
import '../../css/l/lg068tb6f.css';
import '../../css/n/nav65hbab.css';
import '../../css/i/ihnlsybak.css';
import '../../css/n/nncaqob0h.css';
import '../../css/s/sspjfbb1z.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="h5h7hcurd"/><path clip-rule="evenodd" class="x202754nz"/><path clip-rule="evenodd" class="usy43z5_h"/><path class="lg068tb6f"/><path class="nav65hbab"/></g><path clip-rule="evenodd" class="ihnlsybak"/><path clip-rule="evenodd" class="nncaqob0h"/><path clip-rule="evenodd" class="sspjfbb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:studio-light-front"} {...others} />);
}

export default Component;
