import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/za7mskb8v.css';
import '../../css/e/e3e74cbjb.css';
import '../../css/y/y_31ppc5l.css';
import '../../css/f/f5bfeacvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="za7mskb8v"/><path class="e3e74cbjb"/><path class="y_31ppc5l"/><path class="f5bfeacvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ribbon"} {...others} />);
}

export default Component;
