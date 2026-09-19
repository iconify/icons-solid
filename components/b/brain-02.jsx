import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/njm5o0bry.css';
import '../../css/x/xow5m5b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="njm5o0bry"/><path class="xow5m5b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brain-02"} {...others} />);
}

export default Component;
