import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua36r_beu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ua36r_beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:receipt-rupee-filled"} {...others} />);
}

export default Component;
