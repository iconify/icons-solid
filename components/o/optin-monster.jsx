import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq8kfebgh.css';

const viewBox = {"width":2176,"height":1792};
const content = `<path class="jq8kfebgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:optin-monster"} {...others} />);
}

export default Component;
