import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nhhjpt21o.css';
import '../../css/k/kosv92b2z.css';
import '../../css/x/xxa6fabjs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnfOpU3VF"><g class="rohhhzb0l"><path class="nhhjpt21o"/><path class="kosv92b2z"/><circle class="xxa6fabjs"/></g></mask></defs><path mask="url(#SVGnfOpU3VF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:u-turn-left"} {...others} />);
}

export default Component;
