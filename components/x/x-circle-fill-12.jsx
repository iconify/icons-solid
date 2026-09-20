import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c82ie6bdb.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="c82ie6bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:x-circle-fill-12"} {...others} />);
}

export default Component;
