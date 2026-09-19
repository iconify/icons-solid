import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yimqo3c8b.css';
import '../../css/v/vtjv05luq.css';
import '../../css/m/macgrwrbd.css';
import '../../css/z/ziyvo5bby.css';
import '../../css/q/qh9akwb1s.css';
import '../../css/i/ieptt23zw.css';
import '../../css/g/gra6b4jru.css';
import '../../css/k/k9cf0kb7w.css';
import '../../css/y/ybqcitbdm.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="yimqo3c8b"/><path class="vtjv05luq"/><path class="macgrwrbd"/><path class="ziyvo5bby"/><defs><path id="SVGCzSg7Sno" class="qh9akwb1s"/></defs><clipPath id="SVGJ0fh0d9q"><use href="#SVGCzSg7Sno"/></clipPath><g clip-path="url(#SVGJ0fh0d9q)" class="ieptt23zw"><path class="gra6b4jru"/></g><defs><path id="SVGtqqK5dfU" class="k9cf0kb7w"/></defs><clipPath id="SVGs14zYdcd"><use href="#SVGtqqK5dfU"/></clipPath><path clip-path="url(#SVGs14zYdcd)" class="ybqcitbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:safe"} {...others} />);
}

export default Component;
