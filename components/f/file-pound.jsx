import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w8ssl8bon.css';
import '../../css/d/dtntbjtpx.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w8ssl8bon"/><path class="dtntbjtpx"/><path class="tlhsqgbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-pound"} {...others} />);
}

export default Component;
