import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bvsf6nbuh.css';
import '../../css/i/i38mgqbsz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bvsf6nbuh"/><path class="i38mgqbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:no-photo-taking-zone"} {...others} />);
}

export default Component;
