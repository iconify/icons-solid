import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrr___b0r.css';
import '../../css/g/gzovhsluf.css';
import '../../css/f/f2tulrb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jrr___b0r"/><path class="gzovhsluf"/><path class="f2tulrb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:school-01"} {...others} />);
}

export default Component;
