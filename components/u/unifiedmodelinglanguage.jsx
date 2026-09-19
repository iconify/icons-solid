import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hagcpabho.css';
import '../../css/g/gje4q2b_f.css';
import '../../css/i/i0ftdk2_o.css';
import '../../css/d/d86sbccfx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hagcpabho"/><path class="gje4q2b_f"/><path class="i0ftdk2_o"/><path class="d86sbccfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:unifiedmodelinglanguage"} {...others} />);
}

export default Component;
