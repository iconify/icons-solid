import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g60m5abhq.css';
import '../../css/b/bvszfhbhc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGn4LEfSCA"><g class="aql7dnt-u"><circle class="g60m5abhq"/><path class="bvszfhbhc"/></g></mask></defs><path mask="url(#SVGn4LEfSCA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mirror-two"} {...others} />);
}

export default Component;
