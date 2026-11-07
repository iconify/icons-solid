import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqm6qeb7c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yqm6qeb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dog-wearing-collar-in-eaved-leanto-building"} {...others} />);
}

export default Component;
