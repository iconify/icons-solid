import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v_-t39mhq.css';
import '../../css/q/qaxdd91ol.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYn871bav"><g class="aql7dnt-u"><path class="v_-t39mhq"/><path class="qaxdd91ol"/></g></mask></defs><path mask="url(#SVGYn871bav)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vegetable-basket"} {...others} />);
}

export default Component;
