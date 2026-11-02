import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2qv7ttnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2qv7ttnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:location-2-fill"} {...others} />);
}

export default Component;
