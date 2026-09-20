import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixcurubng.css';
import '../../css/k/ksu2hdvbg.css';
import '../../css/b/b9-b7wbxk.css';
import '../../css/k/kr8qbbc_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ixcurubng"/><path class="ksu2hdvbg"/><path clip-rule="evenodd" class="b9-b7wbxk"/><path class="kr8qbbc_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bacteria-duotone"} {...others} />);
}

export default Component;
