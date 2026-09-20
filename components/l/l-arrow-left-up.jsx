import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x5r6-dbuz.css';
import '../../css/m/mgmjmczln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x5r6-dbuz"/><path class="mgmjmczln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-left-up"} {...others} />);
}

export default Component;
