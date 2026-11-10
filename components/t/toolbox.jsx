import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmg5fxyxy.css';
import '../../css/k/kl1ktqbha.css';
import '../../css/m/m0bp3hbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qmg5fxyxy"/><path class="kl1ktqbha"/><path class="m0bp3hbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toolbox"} {...others} />);
}

export default Component;
