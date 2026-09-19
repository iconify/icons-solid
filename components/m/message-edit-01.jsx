import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v231k-4gp.css';
import '../../css/u/u9-4pib_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v231k-4gp"/><path class="u9-4pib_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-edit-01"} {...others} />);
}

export default Component;
