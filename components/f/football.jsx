import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jp-3ayesx.css';
import '../../css/u/um_-of-aw.css';
import '../../css/x/x4hp4ccuu.css';
import '../../css/w/wez4eomyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jp-3ayesx"/><path class="um_-of-aw"/><path class="x4hp4ccuu"/><circle class="wez4eomyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:football"} {...others} />);
}

export default Component;
