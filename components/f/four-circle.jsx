import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yym07ab1c.css';
import '../../css/g/g4zs08s-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yym07ab1c"/><path class="g4zs08s-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:four-circle"} {...others} />);
}

export default Component;
