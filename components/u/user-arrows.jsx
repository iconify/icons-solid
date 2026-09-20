import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s88m1dw2h.css';
import '../../css/r/rymzj_w6f.css';
import '../../css/h/hzqb1s7ax.css';
import '../../css/c/cothx-xat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s88m1dw2h"/><path class="rymzj_w6f"/><path class="hzqb1s7ax"/><path class="cothx-xat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:user-arrows"} {...others} />);
}

export default Component;
