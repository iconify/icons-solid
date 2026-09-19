import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxmoz7bla.css';
import '../../css/y/y4npxtoda.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oxmoz7bla"/><path class="y4npxtoda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tree"} {...others} />);
}

export default Component;
