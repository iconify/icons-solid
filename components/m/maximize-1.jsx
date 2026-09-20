import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lj1rzhbka.css';
import '../../css/i/ii-ohqbro.css';
import '../../css/z/z9-feabeo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lj1rzhbka"/><path class="ii-ohqbro"/><path class="z9-feabeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:maximize-1"} {...others} />);
}

export default Component;
