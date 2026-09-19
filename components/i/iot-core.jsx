import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l0ipqugli.css';
import '../../css/r/ray0mzz-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l0ipqugli"/><path class="ray0mzz-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:iot-core"} {...others} />);
}

export default Component;
