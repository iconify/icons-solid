import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pfpl6hb4u.css';
import '../../css/y/yoggy53-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pfpl6hb4u"/><path class="yoggy53-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:angle-01"} {...others} />);
}

export default Component;
