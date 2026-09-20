import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwebkqbdb.css';
import '../../css/g/g-cuwccgh.css';
import '../../css/t/tnx6kmbfs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pwebkqbdb"/><path class="g-cuwccgh"/><path class="tnx6kmbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:oven-glove-duo"} {...others} />);
}

export default Component;
