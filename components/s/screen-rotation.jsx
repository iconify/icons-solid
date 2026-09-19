import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f2e3a6bxc.css';
import '../../css/v/vis7orbfm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8G5P1bdF"><g class="aql7dnt-u"><path class="f2e3a6bxc"/><path class="vis7orbfm"/></g></mask></defs><path mask="url(#SVG8G5P1bdF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:screen-rotation"} {...others} />);
}

export default Component;
