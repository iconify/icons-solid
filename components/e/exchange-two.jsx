import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zdr2iabse.css';
import '../../css/r/r7hlzjb8s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2OwFEdIS"><g class="aql7dnt-u"><path class="zdr2iabse"/><path class="r7hlzjb8s"/></g></mask></defs><path mask="url(#SVG2OwFEdIS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:exchange-two"} {...others} />);
}

export default Component;
