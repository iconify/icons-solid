import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e-otbnbhw.css';
import '../../css/m/m1es22awk.css';
import '../../css/z/zhztemb6c.css';
import '../../css/w/wsrpbvbti.css';
import '../../css/f/fg68m2erv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnVDaFdKd"><g class="aql7dnt-u"><path class="e-otbnbhw"/><path clip-rule="evenodd" class="m1es22awk"/><path class="zhztemb6c"/><path clip-rule="evenodd" class="wsrpbvbti"/><path class="fg68m2erv"/></g></mask></defs><path mask="url(#SVGnVDaFdKd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:screenshot-two"} {...others} />);
}

export default Component;
