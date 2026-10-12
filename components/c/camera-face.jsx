import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nusilhbug.css';
import '../../css/l/lgi836qzt.css';
import '../../css/u/uefnjzbrc.css';
import '../../css/g/gz5pd9aeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nusilhbug"/><path class="lgi836qzt"/><path class="uefnjzbrc"/><path class="gz5pd9aeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-face"} {...others} />);
}

export default Component;
