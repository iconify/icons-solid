import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1wdsppyi.css';
import '../../css/a/ar_a-93jx.css';
import '../../css/g/gc4x3gbol.css';
import '../../css/t/tg1gd3b0q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p1wdsppyi"/><path class="ar_a-93jx"/><path clip-rule="evenodd" class="gc4x3gbol"/><path class="tg1gd3b0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:keyboard-flat"} {...others} />);
}

export default Component;
