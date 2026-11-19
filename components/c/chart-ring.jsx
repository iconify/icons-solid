import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m95cihbre.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/m/mixyu8bak.css';
import '../../css/z/zbud0lbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m95cihbre"/><circle class="mpf1g8bav"/><circle class="mixyu8bak"/><path class="zbud0lbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-ring"} {...others} />);
}

export default Component;
