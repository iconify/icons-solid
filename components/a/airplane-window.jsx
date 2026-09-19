import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t00azbbug.css';
import '../../css/d/di1i7v7pe.css';
import '../../css/l/l66x-ingq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNn2oBKbq"><g class="wwvp95byt"><path class="t00azbbug"/><path class="di1i7v7pe"/><path class="l66x-ingq"/></g></mask></defs><path mask="url(#SVGNn2oBKbq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:airplane-window"} {...others} />);
}

export default Component;
