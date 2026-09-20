import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fet8ubbpl.css';
import '../../css/v/vza3idmls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fet8ubbpl"/><path class="vza3idmls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:mailbox-post"} {...others} />);
}

export default Component;
