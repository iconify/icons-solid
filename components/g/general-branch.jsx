import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pax1n5bxy.css';
import '../../css/d/dwytx_boo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGN7fd9c0a"><g class="rohhhzb0l"><path class="pax1n5bxy"/><path class="dwytx_boo"/></g></mask></defs><path mask="url(#SVGN7fd9c0a)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:general-branch"} {...others} />);
}

export default Component;
