import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/l/l8x7f9b9k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHL01ablt"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="l8x7f9b9k"/></g></mask></defs><path mask="url(#SVGHL01ablt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:alignment-vertical-right"} {...others} />);
}

export default Component;
