import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h-0rldb5a.css';
import '../../css/y/ysk9-lurp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNYJBjezk"><g class="aql7dnt-u"><path class="h-0rldb5a"/><path class="ysk9-lurp"/></g></mask></defs><path mask="url(#SVGNYJBjezk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:slippers"} {...others} />);
}

export default Component;
