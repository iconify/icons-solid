import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wheiic_ie.css';
import '../../css/t/t_a38r7nw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="wheiic_ie"/><line x1="2.25" x2="13.75" y1="8.25" y2="8.25"/><path class="t_a38r7nw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:server"} {...others} />);
}

export default Component;
