import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dw0h5lscg.css';
import '../../css/a/acmla6bez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dw0h5lscg"/><path class="acmla6bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-digit"} {...others} />);
}

export default Component;
