import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziyuc4lfp.css';

const viewBox = {"width":476,"height":512};
const content = `<path class="ziyuc4lfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:kitchenci"} {...others} />);
}

export default Component;
