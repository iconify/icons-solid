import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ktxr9x2nv.css';
import '../../css/m/myy6c9bde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ktxr9x2nv"/><path class="myy6c9bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-download-02"} {...others} />);
}

export default Component;
