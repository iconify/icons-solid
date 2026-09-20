import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9xnnac5q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9xnnac5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cooklang-chef-light"} {...others} />);
}

export default Component;
