import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f6zu09hhk.css';
import '../../css/a/afl5k8dzu.css';
import '../../css/n/na4f4--6n.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="f6zu09hhk"/><path class="afl5k8dzu"/><path class="na4f4--6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:business-progress-bar-2-flat"} {...others} />);
}

export default Component;
