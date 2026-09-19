import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d79_wtv7f.css';
import '../../css/h/hyg7__beq.css';
import '../../css/m/mf32nbn9n.css';
import '../../css/i/inwqb0b3n.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSHairClip0"><g class="ft5dv1b6b"><g clip-path="url(#ipSHairClip1)" class="d79_wtv7f"><path class="hyg7__beq"/><path class="mf32nbn9n"/><path class="inwqb0b3n"/></g><defs><clipPath id="ipSHairClip1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSHairClip0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hair-clip"} {...others} />);
}

export default Component;
