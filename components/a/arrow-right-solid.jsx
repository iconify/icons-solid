import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/z/znynyusjt.css';
import '../../css/v/vdoaoow2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="znynyusjt"/><path class="vdoaoow2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-right-solid"} {...others} />);
}

export default Component;
