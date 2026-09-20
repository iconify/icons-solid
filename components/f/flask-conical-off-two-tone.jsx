import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zx7e8kbgq.css';
import '../../css/n/n-n7vabdx.css';
import '../../css/x/xlvg-2zdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zx7e8kbgq"/><path class="n-n7vabdx"/><path class="xlvg-2zdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flask-conical-off-two-tone"} {...others} />);
}

export default Component;
