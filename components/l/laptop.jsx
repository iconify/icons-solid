import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/e3kdk1ggj.css';
import '../../css/u/u29hakb-d.css';
import '../../css/u/uvzjptbai.css';
import '../../css/w/wq5cvm5qq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="e3kdk1ggj"/><path class="u29hakb-d"/><path class="uvzjptbai"/><path class="wq5cvm5qq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:laptop"} {...others} />);
}

export default Component;
