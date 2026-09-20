import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp6t2j1op.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pp6t2j1op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:eye-16"} {...others} />);
}

export default Component;
