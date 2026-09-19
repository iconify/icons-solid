import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y5lvn6bif.css';
import '../../css/o/o5ka6gcqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y5lvn6bif"/><path class="o5ka6gcqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-volume"} {...others} />);
}

export default Component;
