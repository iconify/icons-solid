import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p2ltbqbef.css';
import '../../css/v/v-sc98koc.css';
import '../../css/u/u4eo03b7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p2ltbqbef"/><path class="v-sc98koc"/><path class="u4eo03b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cloud-data-transfer"} {...others} />);
}

export default Component;
