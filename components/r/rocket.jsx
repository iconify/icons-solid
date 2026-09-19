import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkjbhub4h.css';
import '../../css/t/tqhcx__ph.css';
import '../../css/k/k0zkyswzk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="bkjbhub4h"/><path class="tqhcx__ph"/><circle class="k0zkyswzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:rocket"} {...others} />);
}

export default Component;
