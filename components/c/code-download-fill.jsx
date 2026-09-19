import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmhge1brw.css';
import '../../css/t/t8uvlebro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmhge1brw"/><path class="t8uvlebro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:code-download-fill"} {...others} />);
}

export default Component;
