import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgk6_nboh.css';
import '../../css/q/qwvdd4wrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qgk6_nboh"/><path class="qwvdd4wrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:photo-changed-filter"} {...others} />);
}

export default Component;
