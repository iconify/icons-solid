import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncvb6585w.css';
import '../../css/d/d92qjjbux.css';
import '../../css/m/mjl92ibwi.css';
import '../../css/d/d68xpcckp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ncvb6585w"/><path clip-rule="evenodd" class="d92qjjbux"/><path clip-rule="evenodd" class="mjl92ibwi"/><path class="d68xpcckp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bus-flat"} {...others} />);
}

export default Component;
