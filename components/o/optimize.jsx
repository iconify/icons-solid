import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/d/dcxavdy0e.css';
import '../../css/r/rlhd26bov.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSVLjOcsa"><g class="hv130ab-t"><path class="dcxavdy0e"/><path class="rlhd26bov"/></g></mask></defs><path mask="url(#SVGSVLjOcsa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:optimize"} {...others} />);
}

export default Component;
