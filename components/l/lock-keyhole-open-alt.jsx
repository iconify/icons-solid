import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv-bsibru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dv-bsibru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:lock-keyhole-open-alt"} {...others} />);
}

export default Component;
