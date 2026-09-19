import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gd8dsqbqp.css';
import '../../css/c/craj1zw4d.css';
import '../../css/g/gqixgnb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gd8dsqbqp"/><path class="craj1zw4d"/><path class="gqixgnb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:calculator-light"} {...others} />);
}

export default Component;
