import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpu5gubso.css';
import '../../css/k/kanmdxout.css';
import '../../css/b/bn6ldsbuk.css';
import '../../css/g/gvs3lc1zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bpu5gubso"/><path class="kanmdxout"/><path class="bn6ldsbuk"/><path class="gvs3lc1zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:crayon-circle"} {...others} />);
}

export default Component;
