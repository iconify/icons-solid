import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ct9lq-phd.css';
import '../../css/n/npzbi206w.css';
import '../../css/l/lqkmkym5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ct9lq-phd"/><circle class="npzbi206w"/><path class="lqkmkym5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chess-bishop"} {...others} />);
}

export default Component;
