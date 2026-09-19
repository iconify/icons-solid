import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_usspbyi.css';
import '../../css/n/n44wcqy3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y_usspbyi"/><path class="n44wcqy3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendars"} {...others} />);
}

export default Component;
