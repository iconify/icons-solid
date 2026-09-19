import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d49fq3bfw.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/t/tnzfzpi4d.css';
import '../../css/t/tzj4vqbyx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="d49fq3bfw"/><g class="n1mjunbsu"><path class="tnzfzpi4d"/><path class="tzj4vqbyx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:agi"} {...others} />);
}

export default Component;
