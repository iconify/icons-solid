import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3qfs9-to.css';
import '../../css/y/y88h9kb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l3qfs9-to"/><path class="y88h9kb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-clothes"} {...others} />);
}

export default Component;
