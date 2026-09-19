import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kej76eb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kej76eb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:location-pin-fill"} {...others} />);
}

export default Component;
