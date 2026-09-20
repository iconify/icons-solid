import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/biqfn3cux.css';
import '../../css/u/ux68i6bzm.css';
import '../../css/j/jgnqm3byw.css';
import '../../css/o/ox_shobxj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="biqfn3cux"/><path class="ux68i6bzm"/><path class="jgnqm3byw"/><path class="ox_shobxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:potted-flower-flat"} {...others} />);
}

export default Component;
