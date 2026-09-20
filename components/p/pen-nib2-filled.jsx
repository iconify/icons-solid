import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg71r1byf.css';
import '../../css/a/ajf_7ldit.css';
import '../../css/n/npr0pslmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gg71r1byf"/><path class="ajf_7ldit"/><path clip-rule="evenodd" class="npr0pslmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-nib2-filled"} {...others} />);
}

export default Component;
