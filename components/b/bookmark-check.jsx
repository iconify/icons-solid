import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t6dlwte9y.css';
import '../../css/i/iw_h8tbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t6dlwte9y"/><path class="iw_h8tbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bookmark-check"} {...others} />);
}

export default Component;
