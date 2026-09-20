import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vepb9acyv.css';
import '../../css/r/rluboeqge.css';
import '../../css/t/tjxnvvb4m.css';
import '../../css/a/avglxfbzj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vepb9acyv"/><path class="rluboeqge"/><path class="tjxnvvb4m"/><path class="avglxfbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wrench-2-duo"} {...others} />);
}

export default Component;
