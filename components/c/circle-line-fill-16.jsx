import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvntw1cis.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jvntw1cis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:circle-line-fill-16"} {...others} />);
}

export default Component;
