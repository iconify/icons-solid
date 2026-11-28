import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/swtpprbgm.css';
import '../../css/m/mgg03l53y.css';
import '../../css/e/e6sdb8jnz.css';
import '../../css/p/pw--o7bns.css';
import '../../css/y/y93scrq9n.css';
import '../../css/e/ek20wvblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="swtpprbgm"/><path class="mgg03l53y"/><path class="e6sdb8jnz"/><path class="pw--o7bns"/><path class="y93scrq9n"/><path class="ek20wvblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scan-text-duo"} {...others} />);
}

export default Component;
