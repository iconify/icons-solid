import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd2ok_1gz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sd2ok_1gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-outline"} {...others} />);
}

export default Component;
