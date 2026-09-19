import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wi26wtigi.css';
import '../../css/g/gu4atmwpg.css';
import '../../css/b/b59eeib2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><ellipse class="wi26wtigi"/><path class="gu4atmwpg"/><path class="b59eeib2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:black-hole-01"} {...others} />);
}

export default Component;
