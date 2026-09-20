import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vun0ddrph.css';
import '../../css/s/sv57hgpcx.css';
import '../../css/i/iin1g9v9i.css';
import '../../css/x/x1rqnf35i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vun0ddrph"/><path class="sv57hgpcx"/><path clip-rule="evenodd" class="iin1g9v9i"/><path class="x1rqnf35i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-minimalistic-outline"} {...others} />);
}

export default Component;
