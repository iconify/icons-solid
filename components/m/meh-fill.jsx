import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spo2f0bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spo2f0bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:meh-fill"} {...others} />);
}

export default Component;
