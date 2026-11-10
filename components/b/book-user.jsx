import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/przyyv_dt.css';
import '../../css/l/l1hdjsbba.css';
import '../../css/b/b6tr4rb1y.css';
import '../../css/h/h20z8sbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="przyyv_dt"/><path class="l1hdjsbba"/><path class="b6tr4rb1y"/><path class="h20z8sbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-user"} {...others} />);
}

export default Component;
