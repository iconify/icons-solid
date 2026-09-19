import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m60evkbux.css';
import '../../css/c/c95ixjped.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m60evkbux"/><path class="c95ixjped"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-not-found"} {...others} />);
}

export default Component;
