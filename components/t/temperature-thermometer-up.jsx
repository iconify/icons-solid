import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/he6u6pbvf.css';
import '../../css/j/j0wdbrx5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="he6u6pbvf"/><path class="j0wdbrx5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:temperature-thermometer-up"} {...others} />);
}

export default Component;
