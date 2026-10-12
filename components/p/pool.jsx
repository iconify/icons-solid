import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k959f_bvg.css';
import '../../css/y/ypwtp4bbd.css';
import '../../css/b/bathjdbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k959f_bvg"/><path class="ypwtp4bbd"/><path class="bathjdbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pool"} {...others} />);
}

export default Component;
