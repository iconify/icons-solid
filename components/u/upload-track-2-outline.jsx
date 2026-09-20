import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n819e5urp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n819e5urp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-2-outline"} {...others} />);
}

export default Component;
