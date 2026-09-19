import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rspufibjm.css';
import '../../css/c/c2-kgheqp.css';
import '../../css/b/bkhcefipx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rspufibjm"/><path class="c2-kgheqp"/><path class="bkhcefipx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ship"} {...others} />);
}

export default Component;
