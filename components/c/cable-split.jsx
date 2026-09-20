import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/u7dzv4mul.css';
import '../../css/j/jp8_umb2p.css';
import '../../css/g/g964ebh7t.css';
import '../../css/o/o_cpohb4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="u7dzv4mul"/><path class="jp8_umb2p"/><path class="g964ebh7t"/><path class="o_cpohb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cable-split"} {...others} />);
}

export default Component;
