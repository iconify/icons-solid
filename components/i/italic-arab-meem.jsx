import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1b2s3b7v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p1b2s3b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:italic-arab-meem"} {...others} />);
}

export default Component;
