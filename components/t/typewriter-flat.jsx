import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q7vqxtz8c.css';
import '../../css/j/jenqg7b4f.css';
import '../../css/o/ocwt-0blw.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q7vqxtz8c"/><path class="jenqg7b4f"/><path class="ocwt-0blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:typewriter-flat"} {...others} />);
}

export default Component;
