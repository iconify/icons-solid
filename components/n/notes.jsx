import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nts37w2-y.css';
import '../../css/i/ir8prxc9v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFo46TdoW"><g class="v3_i3wktz"><path class="nts37w2-y"/><path class="ir8prxc9v"/></g></mask></defs><path mask="url(#SVGFo46TdoW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:notes"} {...others} />);
}

export default Component;
