import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y479ucc5d.css';
import '../../css/e/ei6majb8s.css';
import '../../css/o/odh5eyb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y479ucc5d"/><path class="ei6majb8s"/><path clip-rule="evenodd" class="odh5eyb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:upload-track2-filled"} {...others} />);
}

export default Component;
