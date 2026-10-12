import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fjiyl86rn.css';
import '../../css/l/l5jpaub3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fjiyl86rn"/><path class="l5jpaub3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-style"} {...others} />);
}

export default Component;
