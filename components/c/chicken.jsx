import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tkm1l-bce.css';
import '../../css/y/youbn_grx.css';
import '../../css/t/tuojkhnts.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTPFSeb5s"><g class="aql7dnt-u"><path class="tkm1l-bce"/><path class="youbn_grx"/><path class="tuojkhnts"/></g></mask></defs><path mask="url(#SVGTPFSeb5s)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chicken"} {...others} />);
}

export default Component;
