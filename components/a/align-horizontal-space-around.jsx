import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yj0u6uuwd.css';
import '../../css/w/wxn3fnb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="yj0u6uuwd"/><path class="wxn3fnb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-horizontal-space-around"} {...others} />);
}

export default Component;
