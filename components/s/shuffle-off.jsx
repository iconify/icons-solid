import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjzqyub3e.css';
import '../../css/k/kd1kxab0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sjzqyub3e"/><path class="kd1kxab0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shuffle-off"} {...others} />);
}

export default Component;
