import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xi8rvi-ke.css';
import '../../css/c/c2ff4oy8r.css';
import '../../css/n/ncfen2bbt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xi8rvi-ke"/><path class="c2ff4oy8r"/><path clip-rule="evenodd" class="ncfen2bbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:add-layer-2-flat"} {...others} />);
}

export default Component;
