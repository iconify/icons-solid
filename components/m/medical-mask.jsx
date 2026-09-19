import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6cmulb-y.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q18shsb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6cmulb-y"/><circle class="shu3xdl9q"/><path class="q18shsb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medical-mask"} {...others} />);
}

export default Component;
