import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zbksxgb9w.css';
import '../../css/s/sutv1obin.css';
import '../../css/l/lrv651b1a.css';
import '../../css/f/fshnnhbjh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zbksxgb9w"/><path class="sutv1obin"/><path class="lrv651b1a"/><path class="fshnnhbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:battery-charging"} {...others} />);
}

export default Component;
