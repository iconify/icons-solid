import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z2biv6b_q.css';
import '../../css/b/b5prcacsn.css';
import '../../css/m/m5jxqbcrl.css';
import '../../css/l/lv0a4nb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z2biv6b_q"/><path class="b5prcacsn wm-a"/><path class="m5jxqbcrl"/><path class="lv0a4nb0f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hotel-duo"} {...others} />);
}

export default Component;
