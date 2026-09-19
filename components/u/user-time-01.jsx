import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cs3pbjb4h.css';
import '../../css/a/acjmtmbef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="cs3pbjb4h"/><path class="acjmtmbef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-time-01"} {...others} />);
}

export default Component;
