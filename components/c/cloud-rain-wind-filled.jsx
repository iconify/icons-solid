import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ieszopq_p.css';
import '../../css/u/ua2r80buv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ieszopq_p"/><path class="ua2r80buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-rain-wind-filled"} {...others} />);
}

export default Component;
