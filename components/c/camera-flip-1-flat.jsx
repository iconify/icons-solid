import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i4xtvfb6s.css';
import '../../css/d/dn-fkoz4z.css';
import '../../css/j/jz3sd-cwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i4xtvfb6s"/><path class="dn-fkoz4z"/><path class="jz3sd-cwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:camera-flip-1-flat"} {...others} />);
}

export default Component;
