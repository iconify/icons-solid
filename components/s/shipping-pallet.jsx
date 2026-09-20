import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6d6_jbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6d6_jbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shipping-pallet"} {...others} />);
}

export default Component;
