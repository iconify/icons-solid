import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgfunjbue.css';
import '../../css/m/mbh8a7n3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cgfunjbue"/><path class="mbh8a7n3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:banknote-x"} {...others} />);
}

export default Component;
