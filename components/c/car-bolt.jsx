import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivwl1-arg.css';
import '../../css/u/uj46r2dkm.css';
import '../../css/m/m_u9wub5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivwl1-arg"/><path class="uj46r2dkm"/><path class="m_u9wub5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:car-bolt"} {...others} />);
}

export default Component;
