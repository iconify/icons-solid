import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwjefd-_m.css';
import '../../css/m/mwa49fbjg.css';
import '../../css/u/uj2eeb6wg.css';
import '../../css/r/rk8d_ibcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwjefd-_m"/><path clip-rule="evenodd" class="mwa49fbjg"/><path class="uj2eeb6wg"/><path clip-rule="evenodd" class="rk8d_ibcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:id-card"} {...others} />);
}

export default Component;
