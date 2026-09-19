import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlbcxttud.css';
import '../../css/b/b3qn-8h1z.css';
import '../../css/t/t_j61bbmi.css';
import '../../css/j/jded-0bwd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="dlbcxttud"/><path class="b3qn-8h1z"/><path class="t_j61bbmi"/><path class="jded-0bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:present"} {...others} />);
}

export default Component;
