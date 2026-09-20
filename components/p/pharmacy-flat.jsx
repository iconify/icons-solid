import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfkaxlbyd.css';
import '../../css/h/hgv9lmd4w.css';
import '../../css/x/xkeyg-xbo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lfkaxlbyd"/><path clip-rule="evenodd" class="hgv9lmd4w"/><path clip-rule="evenodd" class="xkeyg-xbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pharmacy-flat"} {...others} />);
}

export default Component;
