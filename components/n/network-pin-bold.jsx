import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvmmamb2n.css';
import '../../css/k/kiom4-bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvmmamb2n"/><path class="kiom4-bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-pin-bold"} {...others} />);
}

export default Component;
