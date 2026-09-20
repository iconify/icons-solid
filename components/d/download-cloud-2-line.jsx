import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbf4n400f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbf4n400f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:download-cloud-2-line"} {...others} />);
}

export default Component;
