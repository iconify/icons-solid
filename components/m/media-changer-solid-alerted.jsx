import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij_mazs6p.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="ij_mazs6p"/><path class="uaycyrbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:media-changer-solid-alerted"} {...others} />);
}

export default Component;
