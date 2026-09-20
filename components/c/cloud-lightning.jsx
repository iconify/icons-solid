import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yb77oxbsr.css';
import '../../css/j/jfskvo7yh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yb77oxbsr"/><path class="jfskvo7yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-lightning"} {...others} />);
}

export default Component;
