import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ez9kb4blk.css';
import '../../css/g/guqdrdbsc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJHYfreVU"><g class="v3_i3wktz"><path class="ez9kb4blk"/><path class="guqdrdbsc"/></g></mask></defs><path mask="url(#SVGJHYfreVU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:workbench"} {...others} />);
}

export default Component;
