import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z725jpbwl.css';
import '../../css/h/h6b92hbvc.css';
import '../../css/k/k40l5pl7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z725jpbwl"/><path class="h6b92hbvc"/><path class="k40l5pl7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:blur"} {...others} />);
}

export default Component;
