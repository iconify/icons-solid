import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ld34ikbzm.css';
import '../../css/d/dn67aubms.css';
import '../../css/v/v2_52rrfv.css';
import '../../css/i/ii0u8bc6s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQakfndGH"><g class="wwvp95byt"><path clip-rule="evenodd" class="ld34ikbzm"/><path class="dn67aubms"/><path class="v2_52rrfv"/><path class="ii0u8bc6s"/></g></mask></defs><path mask="url(#SVGQakfndGH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bus-two"} {...others} />);
}

export default Component;
