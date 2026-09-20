import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u85aeivei.css';
import '../../css/m/m-7170blj.css';
import '../../css/b/btdqlqbzk.css';
import '../../css/b/bka8n3bzg.css';
import '../../css/m/mitcfcb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="u85aeivei"/><path class="m-7170blj"/><path class="btdqlqbzk"/><path class="bka8n3bzg"/><path class="mitcfcb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:ui-webpage-bullets"} {...others} />);
}

export default Component;
