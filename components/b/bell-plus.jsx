import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c6snbdcwp.css';
import '../../css/a/aq738pw2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c6snbdcwp"/><path class="aq738pw2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bell-plus"} {...others} />);
}

export default Component;
