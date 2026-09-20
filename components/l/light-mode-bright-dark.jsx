import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oe-m7obwx.css';
import '../../css/c/c70tr2bcp.css';
import '../../css/y/ys-cob_hs.css';
import '../../css/p/pkiz8tbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oe-m7obwx"/><path class="c70tr2bcp"/><path class="ys-cob_hs"/><path class="pkiz8tbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:light-mode-bright-dark"} {...others} />);
}

export default Component;
