import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imf6imktc.css';
import '../../css/y/ynqfxi_gi.css';
import '../../css/i/ibyb00b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="imf6imktc"/><path class="ynqfxi_gi"/><path class="ibyb00b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-sparkle"} {...others} />);
}

export default Component;
