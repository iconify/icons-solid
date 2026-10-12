import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpihk_bma.css';
import '../../css/e/evn5u678o.css';
import '../../css/n/nkwunfxao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zpihk_bma"/><path class="evn5u678o"/><path class="nkwunfxao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:diaper"} {...others} />);
}

export default Component;
