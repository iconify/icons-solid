import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/umzdidcsz.css';
import '../../css/e/ezi8_jb2i.css';
import '../../css/k/k77-m-b2n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="umzdidcsz"/><path class="ezi8_jb2i"/><path class="k77-m-b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:braille-blind"} {...others} />);
}

export default Component;
