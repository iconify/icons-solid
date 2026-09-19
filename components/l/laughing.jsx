import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sz391hb6o.css';
import '../../css/j/jz5d8kipf.css';
import '../../css/g/g2ignvb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sz391hb6o"/><path class="jz5d8kipf"/><path class="g2ignvb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laughing"} {...others} />);
}

export default Component;
