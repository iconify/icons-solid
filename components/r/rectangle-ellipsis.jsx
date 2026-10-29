import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dlemphk8j.css';
import '../../css/i/i76dh14xw.css';
import '../../css/g/gj0zhrbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dlemphk8j"/><path class="i76dh14xw"/><path class="gj0zhrbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rectangle-ellipsis"} {...others} />);
}

export default Component;
