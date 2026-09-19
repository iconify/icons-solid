import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr5_dehzz.css';
import '../../css/p/pqy_qebbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sr5_dehzz"/><path class="pqy_qebbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-game"} {...others} />);
}

export default Component;
