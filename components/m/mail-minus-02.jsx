import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mr_9sbbpq.css';
import '../../css/z/z7dh5acxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mr_9sbbpq"/><path class="z7dh5acxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-minus-02"} {...others} />);
}

export default Component;
