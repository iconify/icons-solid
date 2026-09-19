import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ujy6g6bfk.css';
import '../../css/i/iindkzhuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ujy6g6bfk"/><path class="iindkzhuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-round-key"} {...others} />);
}

export default Component;
