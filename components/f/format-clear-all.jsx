import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzwhn-bgh.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="kzwhn-bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:format-clear-all"} {...others} />);
}

export default Component;
