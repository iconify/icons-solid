import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtf5idbqa.css';
import '../../css/d/dv9ylfbxn.css';
import '../../css/p/pyd26tv7e.css';
import '../../css/v/v94zx3btr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jtf5idbqa"/><path class="dv9ylfbxn"/><path class="pyd26tv7e"/><path class="v94zx3btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-medal"} {...others} />);
}

export default Component;
