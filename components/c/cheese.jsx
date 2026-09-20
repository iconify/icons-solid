import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/alseyuaeh.css';
import '../../css/h/hy-ifwbja.css';
import '../../css/x/xtsrmvj7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="alseyuaeh"/><path class="hy-ifwbja"/><circle class="xtsrmvj7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cheese"} {...others} />);
}

export default Component;
