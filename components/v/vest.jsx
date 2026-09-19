import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/ba-7qfb9r.css';
import '../../css/p/pe49hd0tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ba-7qfb9r"/><path class="pe49hd0tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vest"} {...others} />);
}

export default Component;
