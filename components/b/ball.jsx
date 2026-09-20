import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b3lty20bp.css';
import '../../css/o/owc7okbnx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="b3lty20bp"/><path class="owc7okbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:ball"} {...others} />);
}

export default Component;
