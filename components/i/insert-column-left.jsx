import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/veml0mbwe.css';
import '../../css/j/j8f4t4bxc.css';
import '../../css/j/jgx7b9k1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="veml0mbwe"/><path class="j8f4t4bxc"/><path class="jgx7b9k1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:insert-column-left"} {...others} />);
}

export default Component;
