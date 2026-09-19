import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hgyr1h5yj.css';
import '../../css/i/ifj0fdciu.css';
import '../../css/w/wve1_ubeu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKIKbKdgr"><g class="aql7dnt-u"><path class="hgyr1h5yj"/><path class="ifj0fdciu"/><path class="wve1_ubeu"/></g></mask></defs><path mask="url(#SVGKIKbKdgr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chair"} {...others} />);
}

export default Component;
