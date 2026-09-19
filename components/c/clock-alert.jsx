import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywbvq0bcc.css';
import '../../css/h/hrb1zx6ue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywbvq0bcc"/><path class="hrb1zx6ue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clock-alert"} {...others} />);
}

export default Component;
