import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quuok3bmb.css';
import '../../css/r/r_ree2bmt.css';
import '../../css/p/p58s-8tnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="quuok3bmb"/><path class="r_ree2bmt"/><path class="p58s-8tnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-cap-square"} {...others} />);
}

export default Component;
