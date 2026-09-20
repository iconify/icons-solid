import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/aq_c3bb-v.css';
import '../../css/u/udxm3zbjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="aq_c3bb-v"/><path class="udxm3zbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ladder"} {...others} />);
}

export default Component;
