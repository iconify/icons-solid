import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vknmo2d0c.css';
import '../../css/d/dx1bpub0v.css';
import '../../css/i/iply1wbuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhy06acoe"><g class="aql7dnt-u"><path class="vknmo2d0c"/><path class="dx1bpub0v"/><path class="iply1wbuc"/></g></mask></defs><path mask="url(#SVGhy06acoe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:receiver"} {...others} />);
}

export default Component;
