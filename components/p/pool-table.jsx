import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjwyhhial.css';
import '../../css/g/ghudvwymx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sjwyhhial"/><path class="ghudvwymx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pool-table"} {...others} />);
}

export default Component;
