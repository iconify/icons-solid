import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek6siccld.css';
import '../../css/o/o3x9u2bky.css';
import '../../css/l/lw0gi7b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ek6siccld"/><path class="o3x9u2bky"/><path class="lw0gi7b3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:spray"} {...others} />);
}

export default Component;
