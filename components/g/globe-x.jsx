import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ev035nb4c.css';
import '../../css/p/py4ujobby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ev035nb4c"/><path class="py4ujobby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:globe-x"} {...others} />);
}

export default Component;
