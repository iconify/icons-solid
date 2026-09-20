import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xpxyo1b4d.css';
import '../../css/m/mg53libkt.css';
import '../../css/t/t9alf4bor.css';
import '../../css/b/bdvc75j1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xpxyo1b4d"/><path class="mg53libkt"/><path class="t9alf4bor"/><path class="bdvc75j1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:database-data-transfer-computer-imac-2"} {...others} />);
}

export default Component;
