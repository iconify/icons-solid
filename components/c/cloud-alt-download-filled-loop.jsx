import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxsk5z.css';
import '../../css/n/naq--k.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-1mdu6d.css';
import '../../css/d/d-360tni.css';
import '../../css/d/d-ag_l0s.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNTjAMdeN"><path class="fxsk5z"/><path class="naq--k"/></mask></defs><path mask="url(#SVGNTjAMdeN)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-download-filled-loop"} {...others} />);
}

export default Component;
