import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n033gnm-c.css';
import '../../css/w/wyp53z5-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n033gnm-c"/><path class="wyp53z5-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:phone-erase"} {...others} />);
}

export default Component;
