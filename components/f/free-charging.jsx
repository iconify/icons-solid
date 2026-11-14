import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wp6pz0b9c.css';
import '../../css/f/fpneqjbpl.css';
import '../../css/c/c6zd3b_8c.css';
import '../../css/g/g5prnvbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wp6pz0b9c"/><circle class="fpneqjbpl"/><path class="c6zd3b_8c"/><path class="g5prnvbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:free-charging"} {...others} />);
}

export default Component;
