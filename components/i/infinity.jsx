import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhe6ibcui.css';

const viewBox = {"width":1024,"height":614};
const content = `<path class="qhe6ibcui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:infinity"} {...others} />);
}

export default Component;
