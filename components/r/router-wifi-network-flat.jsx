import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rvqnfbaaf.css';
import '../../css/t/tt5hhcckr.css';
import '../../css/y/y8oq2gb1u.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rvqnfbaaf"/><path class="tt5hhcckr"/><path class="y8oq2gb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:router-wifi-network-flat"} {...others} />);
}

export default Component;
