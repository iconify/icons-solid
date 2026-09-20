import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9eew5avu.css';
import '../../css/q/q05da3k-g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j9eew5avu"/><path class="q05da3k-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:group-meeting-approval"} {...others} />);
}

export default Component;
