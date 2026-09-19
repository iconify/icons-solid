import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/geju8gabu.css';
import '../../css/q/qz7nj6phs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAfVvubCX"><g class="aql7dnt-u"><path class="geju8gabu"/><path class="qz7nj6phs"/></g></mask></defs><path mask="url(#SVGAfVvubCX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:round-mask"} {...others} />);
}

export default Component;
