import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lhqeb58hl.css';
import '../../css/t/t0gv9xn8e.css';
import '../../css/b/bs_kf6bpt.css';
import '../../css/b/bx2c1bcox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lhqeb58hl"/><path class="t0gv9xn8e"/><path class="bs_kf6bpt"/><path class="bx2c1bcox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:location-office"} {...others} />);
}

export default Component;
