import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pft8uq5xe.css';
import '../../css/p/puswatsjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pft8uq5xe"/><path class="puswatsjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-user-01"} {...others} />);
}

export default Component;
