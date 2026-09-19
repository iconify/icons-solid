import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vk4eesvoq.css';
import '../../css/b/b0js2ekqm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGU1tcTb7v"><g class="aql7dnt-u"><path class="vk4eesvoq"/><path class="b0js2ekqm"/></g></mask></defs><path mask="url(#SVGU1tcTb7v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:speaker-one"} {...others} />);
}

export default Component;
