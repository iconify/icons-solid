import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d6hu3bb-s.css';
import '../../css/n/nzwxjsbfh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="d6hu3bb-s"/><path class="nzwxjsbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hand-held-tablet-writing"} {...others} />);
}

export default Component;
