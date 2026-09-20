import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5ztd_d6h.css';
import '../../css/d/d95eludkt.css';
import '../../css/l/lj5j_jyat.css';
import '../../css/n/nvoeil81w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="x5ztd_d6h"/><path class="d95eludkt"/><path class="lj5j_jyat"/><path class="nvoeil81w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:controller-wireless"} {...others} />);
}

export default Component;
