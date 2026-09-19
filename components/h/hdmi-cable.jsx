import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r0fr59bon.css';
import '../../css/i/i69v71bja.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYlJ9KcbF"><g class="aql7dnt-u"><path class="r0fr59bon"/><path class="i69v71bja"/></g></mask></defs><path mask="url(#SVGYlJ9KcbF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hdmi-cable"} {...others} />);
}

export default Component;
