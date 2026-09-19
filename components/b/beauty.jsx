import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ueqtqjl_z.css';
import '../../css/v/v4mlrac6g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAVd9YqAr"><g class="aql7dnt-u"><path class="ueqtqjl_z"/><path class="v4mlrac6g"/></g></mask></defs><path mask="url(#SVGAVd9YqAr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:beauty"} {...others} />);
}

export default Component;
