import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mot0enb-y.css';
import '../../css/b/blad_456u.css';
import '../../css/c/cf_fpwv8i.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mot0enb-y"/><path class="blad_456u"/><path class="cf_fpwv8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:speaker-2-flat"} {...others} />);
}

export default Component;
