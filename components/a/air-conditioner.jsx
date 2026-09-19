import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0ugaht_w.css';
import '../../css/d/dbovvfb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0ugaht_w"/><path class="dbovvfb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:air-conditioner"} {...others} />);
}

export default Component;
