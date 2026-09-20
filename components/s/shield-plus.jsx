import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1hrasbfn.css';
import '../../css/k/kl1808iyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1hrasbfn"/><path class="kl1808iyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:shield-plus"} {...others} />);
}

export default Component;
