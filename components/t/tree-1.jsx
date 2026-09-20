import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/oy1_yjbvd.css';
import '../../css/v/v27y_ex4z.css';
import '../../css/u/ui3fuxb6a.css';
import '../../css/a/aalu_cbhj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="oy1_yjbvd"/><path class="v27y_ex4z"/><path class="ui3fuxb6a"/><path class="aalu_cbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tree-1"} {...others} />);
}

export default Component;
