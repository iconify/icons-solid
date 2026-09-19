import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oofs749fw.css';
import '../../css/j/jafxdgddr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oofs749fw"/><path class="jafxdgddr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:work-alert"} {...others} />);
}

export default Component;
