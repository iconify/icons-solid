import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwv613bdh.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="xwv613bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:download-from-cloud"} {...others} />);
}

export default Component;
