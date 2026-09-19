import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/epx73cr8l.css';
import '../../css/b/bi74qk6aa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8umZkbDS"><g class="aql7dnt-u"><path class="epx73cr8l"/><path class="bi74qk6aa"/></g></mask></defs><path mask="url(#SVG8umZkbDS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:effects"} {...others} />);
}

export default Component;
