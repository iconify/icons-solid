import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uv6n38b2y.css';
import '../../css/t/teptysjpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uv6n38b2y"/><path class="teptysjpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:html-file-02"} {...others} />);
}

export default Component;
