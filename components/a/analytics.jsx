import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwwl4pngj.css';
import '../../css/c/c7npnxbfc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uwwl4pngj"/><path class="c7npnxbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:analytics"} {...others} />);
}

export default Component;
