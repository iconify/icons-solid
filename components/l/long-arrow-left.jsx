import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylobwvhsp.css';

const viewBox = {"width":1728,"height":1280};
const content = `<path class="ylobwvhsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:long-arrow-left"} {...others} />);
}

export default Component;
