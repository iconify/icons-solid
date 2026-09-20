import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3_wm5b1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3_wm5b1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:voucher"} {...others} />);
}

export default Component;
