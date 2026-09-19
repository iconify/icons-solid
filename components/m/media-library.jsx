import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-01x7gco.css';
import '../../css/e/e2rfzjbzi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t-01x7gco"/><path class="e2rfzjbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:media-library"} {...others} />);
}

export default Component;
