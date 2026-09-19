import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wqr-41aca.css';
import '../../css/m/misun9bmf.css';
import '../../css/j/jterakbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wqr-41aca"/><circle class="misun9bmf"/><path class="jterakbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-dollar"} {...others} />);
}

export default Component;
