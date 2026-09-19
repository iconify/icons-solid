import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n337d2b4s.css';
import '../../css/h/h-f1dmm4x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6QavSbrV"><g class="aql7dnt-u"><path class="n337d2b4s"/><path class="h-f1dmm4x"/></g></mask></defs><path mask="url(#SVG6QavSbrV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:up-and-down"} {...others} />);
}

export default Component;
