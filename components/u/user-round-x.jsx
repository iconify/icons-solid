import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k2me688ii.css';
import '../../css/g/gdjy7ibip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k2me688ii"/><path class="gdjy7ibip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-x"} {...others} />);
}

export default Component;
