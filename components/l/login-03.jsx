import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mr2ezvtrs.css';
import '../../css/s/saj43ywtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mr2ezvtrs"/><path class="saj43ywtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:login-03"} {...others} />);
}

export default Component;
