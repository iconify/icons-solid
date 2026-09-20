import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0bv3cfgy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k0bv3cfgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mountains-and-lake"} {...others} />);
}

export default Component;
