import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nwxqj3b3x.css';
import '../../css/w/w-ga6iwfh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuUquHdAP"><g class="aql7dnt-u"><path class="nwxqj3b3x"/><path class="w-ga6iwfh"/></g></mask></defs><path mask="url(#SVGuUquHdAP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:barber-brush"} {...others} />);
}

export default Component;
