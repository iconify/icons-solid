import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxrostbfo.css';
import '../../css/f/f-n3xro7a.css';
import '../../css/x/x1rqnf35i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sxrostbfo"/><path clip-rule="evenodd" class="f-n3xro7a"/><path class="x1rqnf35i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-low-minimalistic-outline"} {...others} />);
}

export default Component;
