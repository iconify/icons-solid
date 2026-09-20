import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zssh7obzr.css';
import '../../css/o/o1gawiknw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zssh7obzr"/><path class="o1gawiknw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:triangle"} {...others} />);
}

export default Component;
