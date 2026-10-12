import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixnuo5b5d.css';
import '../../css/w/wyl_mjnfi.css';
import '../../css/f/fgku1kmnz.css';
import '../../css/k/kkwiaglaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ixnuo5b5d"/><path class="wyl_mjnfi"/><circle class="fgku1kmnz"/><path class="kkwiaglaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lighthouse"} {...others} />);
}

export default Component;
