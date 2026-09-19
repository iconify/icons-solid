import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zka7ihdcz.css';
import '../../css/f/fskbs36-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zka7ihdcz"/><path class="fskbs36-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:person-standing"} {...others} />);
}

export default Component;
