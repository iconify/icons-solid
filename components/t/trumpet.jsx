import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/z2kxsp8bg.css';
import '../../css/b/bd13yxb1u.css';
import '../../css/e/eyowyccos.css';
import '../../css/s/s4vv8pw8c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPTU0vd3E"><g class="rohhhzb0l"><path class="z2kxsp8bg"/><path class="bd13yxb1u"/><path class="eyowyccos"/><path class="s4vv8pw8c"/></g></mask></defs><path mask="url(#SVGPTU0vd3E)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:trumpet"} {...others} />);
}

export default Component;
