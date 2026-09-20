import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/axnmeqbxk.css';
import '../../css/d/dojp_5bsq.css';
import '../../css/p/pqxkbvbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="axnmeqbxk"/><path class="dojp_5bsq"/><path class="pqxkbvbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:target-off"} {...others} />);
}

export default Component;
