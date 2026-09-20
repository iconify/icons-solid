import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m42whbbfs.css';
import '../../css/d/dsev7c1am.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m42whbbfs"/><path class="dsev7c1am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:chrome-restore-var"} {...others} />);
}

export default Component;
