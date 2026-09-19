import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p9msfmbxd.css';
import '../../css/i/itdqx4vmq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKLzWnbDx"><g class="aql7dnt-u"><path clip-rule="evenodd" class="p9msfmbxd"/><path class="itdqx4vmq"/></g></mask></defs><path mask="url(#SVGKLzWnbDx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:building-three"} {...others} />);
}

export default Component;
