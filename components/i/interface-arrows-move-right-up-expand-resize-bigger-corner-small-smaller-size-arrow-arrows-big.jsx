import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j7q1yzblr.css';
import '../../css/g/g7d4wabyp.css';
import '../../css/h/hk658tb-a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j7q1yzblr"/><path class="g7d4wabyp"/><path class="hk658tb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-move-right-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
