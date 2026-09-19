import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r39fblbgi.css';
import '../../css/c/cazgsbbek.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFBEg4dkG"><g class="aql7dnt-u"><path class="r39fblbgi"/><path class="cazgsbbek"/></g></mask></defs><path mask="url(#SVGFBEg4dkG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:christmas-tree"} {...others} />);
}

export default Component;
