import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h2ssmobls.css';
import '../../css/z/z2l4x2b-n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="h2ssmobls"/><path class="z2l4x2b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:table-lamp-1"} {...others} />);
}

export default Component;
