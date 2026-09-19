import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sgt2pjbyb.css';
import '../../css/x/x_-tvq9_u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9BDWIehN"><g class="aql7dnt-u"><path class="sgt2pjbyb"/><path class="x_-tvq9_u"/></g></mask></defs><path mask="url(#SVG9BDWIehN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:short-skirt"} {...others} />);
}

export default Component;
