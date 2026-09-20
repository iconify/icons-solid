import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ob8shgb5a.css';
import '../../css/y/ysnpztblx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ob8shgb5a"/><path class="ysnpztblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:empty-clipboard"} {...others} />);
}

export default Component;
