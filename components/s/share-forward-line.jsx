import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vin-r_b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vin-r_b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:share-forward-line"} {...others} />);
}

export default Component;
