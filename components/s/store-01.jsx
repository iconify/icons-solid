import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/id9m96z9c.css';
import '../../css/o/o5na2xb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="id9m96z9c"/><path class="o5na2xb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-01"} {...others} />);
}

export default Component;
