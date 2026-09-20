import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cgoc14bzs.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/k/kawn60uka.css';
import '../../css/g/ge82jxbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cgoc14bzs"/><path class="g6wanyb_h"/><rect class="kawn60uka"/><path class="ge82jxbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-lock-2"} {...others} />);
}

export default Component;
