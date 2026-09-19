import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blah4vbiz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="blah4vbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-axes-2d-down"} {...others} />);
}

export default Component;
