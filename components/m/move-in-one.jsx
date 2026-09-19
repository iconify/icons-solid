import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/q_4lxo7cg.css';
import '../../css/v/vxaq4rb_l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY382sdWr"><g class="aql7dnt-u"><path clip-rule="evenodd" class="q_4lxo7cg"/><path class="vxaq4rb_l"/></g></mask></defs><path mask="url(#SVGY382sdWr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:move-in-one"} {...others} />);
}

export default Component;
