import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybks5f9jf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ybks5f9jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rotten-tomatoes-dark"} {...others} />);
}

export default Component;
