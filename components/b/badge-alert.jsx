import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y58lw41fp.css';
import '../../css/o/o7fygmbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y58lw41fp"/><path class="o7fygmbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:badge-alert"} {...others} />);
}

export default Component;
