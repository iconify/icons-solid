import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bec__ebha.css';
import '../../css/b/bp4o25bqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bec__ebha"/><path class="bp4o25bqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-x"} {...others} />);
}

export default Component;
