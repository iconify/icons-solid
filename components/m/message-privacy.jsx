import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z7dq4587f.css';
import '../../css/c/cfp1robhh.css';
import '../../css/x/x5d_g09_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxdOAMbRG"><g class="aql7dnt-u"><path class="z7dq4587f"/><path class="cfp1robhh"/><path class="x5d_g09_z"/></g></mask></defs><path mask="url(#SVGxdOAMbRG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:message-privacy"} {...others} />);
}

export default Component;
