import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/lo2azab8w.css';
import '../../css/s/swzcsov6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAOTGHdEW"><g class="v3_i3wktz"><path class="lo2azab8w"/><path class="swzcsov6m"/></g></mask></defs><path mask="url(#SVGAOTGHdEW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:blackboard"} {...others} />);
}

export default Component;
