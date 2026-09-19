import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikq9_k5ko.css';

const viewBox = {"width":1760,"height":1792};
const content = `<path class="ikq9_k5ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-amount-desc"} {...others} />);
}

export default Component;
