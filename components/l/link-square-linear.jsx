import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9ln-r5qf.css';
import '../../css/a/a9h_e8l4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o9ln-r5qf"/><path class="a9h_e8l4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-square-linear"} {...others} />);
}

export default Component;
