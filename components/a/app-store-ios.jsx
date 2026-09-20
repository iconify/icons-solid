import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8j07dwip.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n8j07dwip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:app-store-ios"} {...others} />);
}

export default Component;
