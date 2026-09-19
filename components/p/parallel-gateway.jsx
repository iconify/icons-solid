import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r1ocmpbbi.css';
import '../../css/e/epwsljzvl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq53u6c7o"><g class="rohhhzb0l"><path class="r1ocmpbbi"/><path class="epwsljzvl"/></g></mask></defs><path mask="url(#SVGq53u6c7o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:parallel-gateway"} {...others} />);
}

export default Component;
