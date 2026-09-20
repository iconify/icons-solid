import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8bspe97r.css';
import '../../css/o/odhp80tlq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8bspe97r"/><path class="odhp80tlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bandage-leg-bold"} {...others} />);
}

export default Component;
