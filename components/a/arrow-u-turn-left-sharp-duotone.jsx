import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3c2rj_zs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3c2rj_zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-left-sharp-duotone"} {...others} />);
}

export default Component;
