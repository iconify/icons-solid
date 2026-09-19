import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gd9inehhp.css';
import '../../css/z/zzmzu9bzw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGODUmedRR"><g class="hv130ab-t"><path clip-rule="evenodd" class="gd9inehhp"/><path class="zzmzu9bzw"/></g></mask></defs><path mask="url(#SVGODUmedRR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:drop-shadow-right"} {...others} />);
}

export default Component;
