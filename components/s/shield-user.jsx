import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ezzhmbj5r.css';
import '../../css/y/yfymg5b-i.css';
import '../../css/r/rus9pebka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ezzhmbj5r"/><path class="yfymg5b-i"/><circle class="rus9pebka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shield-user"} {...others} />);
}

export default Component;
