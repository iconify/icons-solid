import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hcknoobta.css';
import '../../css/b/bu-51_byq.css';
import '../../css/y/yvjmprl1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKfHlW4su"><g class="v3_i3wktz"><path class="hcknoobta"/><path class="bu-51_byq"/><path class="yvjmprl1n"/></g></mask></defs><path mask="url(#SVGKfHlW4su)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:basketball-clothes"} {...others} />);
}

export default Component;
