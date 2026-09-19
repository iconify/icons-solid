import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r61vi9dqe.css';
import '../../css/u/u9jd1wvuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r61vi9dqe"/><path class="u9jd1wvuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:candy-off"} {...others} />);
}

export default Component;
