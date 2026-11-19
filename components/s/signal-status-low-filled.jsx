import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqodkgbgf.css';
import '../../css/y/ysxtnmb6c.css';
import '../../css/i/im3r36nom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dqodkgbgf"/><path clip-rule="evenodd" class="ysxtnmb6c"/><path class="im3r36nom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:signal-status-low-filled"} {...others} />);
}

export default Component;
