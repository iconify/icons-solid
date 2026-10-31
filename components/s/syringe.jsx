import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/ca5lwac6e.css';
import '../../css/l/ldbir1_le.css';
import '../../css/b/b417b6bvh.css';
import '../../css/o/o79sz90sw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ca5lwac6e wm-shadow"/><path class="ldbir1_le wm-shadow"/><path class="b417b6bvh"/><path class="o79sz90sw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:syringe"} {...others} />);
}

export default Component;
