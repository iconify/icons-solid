import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auo3ycdia.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="auo3ycdia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:workflow-automation"} {...others} />);
}

export default Component;
