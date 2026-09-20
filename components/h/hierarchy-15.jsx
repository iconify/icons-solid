import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wcqf_cbga.css';
import '../../css/x/xu7e5sqmi.css';
import '../../css/h/h3xchhb6n.css';
import '../../css/b/b2e5_3blm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wcqf_cbga"/><path class="xu7e5sqmi"/><path class="h3xchhb6n"/><path class="b2e5_3blm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hierarchy-15"} {...others} />);
}

export default Component;
