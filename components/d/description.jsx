import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sg7_6sbas.css';
import '../../css/k/knllnfbrf.css';
import '../../css/u/uqjbzxbre.css';
import '../../css/s/sfwi0ccjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="sg7_6sbas"/><path class="knllnfbrf"/><path class="uqjbzxbre"/><path class="sfwi0ccjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:description"} {...others} />);
}

export default Component;
