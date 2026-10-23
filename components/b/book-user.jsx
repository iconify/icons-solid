import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/haq88g9dp.css';
import '../../css/a/aij_r7bng.css';
import '../../css/r/rp774jbno.css';
import '../../css/h/h20z8sbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="haq88g9dp"/><path class="aij_r7bng"/><path class="rp774jbno"/><path class="h20z8sbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-user"} {...others} />);
}

export default Component;
