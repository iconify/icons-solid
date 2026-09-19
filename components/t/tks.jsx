import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mrm-b0b6w.css';
import '../../css/m/md286fbip.css';
import '../../css/m/mby9vxbvb.css';
import '../../css/k/ke0ekgt1o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="mrm-b0b6w"/><g class="md286fbip"><path class="mby9vxbvb"/><path class="ke0ekgt1o"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tks"} {...others} />);
}

export default Component;
