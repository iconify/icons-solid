import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kgt5dq5fq.css';
import '../../css/z/zsp_ecctg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="kgt5dq5fq"/><path class="zsp_ecctg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:text-message"} {...others} />);
}

export default Component;
