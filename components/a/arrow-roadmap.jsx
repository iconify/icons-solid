import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kcjio60yp.css';
import '../../css/n/n5qkwpbqm.css';
import '../../css/e/e70fzccye.css';
import '../../css/e/ee-mcyhiw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kcjio60yp"/><path class="n5qkwpbqm"/><path class="e70fzccye"/><path class="ee-mcyhiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-roadmap"} {...others} />);
}

export default Component;
