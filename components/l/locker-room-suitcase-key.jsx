import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7dpj33qp.css';
import '../../css/w/wav13q8tl.css';
import '../../css/a/al5gilb6a.css';
import '../../css/v/vt40isbcm.css';
import '../../css/x/x39t35blz.css';
import '../../css/z/zp_jy2b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r7dpj33qp"/><path class="wav13q8tl"/><path class="al5gilb6a"/><path class="vt40isbcm"/><path class="x39t35blz"/><path class="zp_jy2b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:locker-room-suitcase-key"} {...others} />);
}

export default Component;
