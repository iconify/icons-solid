import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlr8r5bfe.css';
import '../../css/y/yt28hwmoe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zlr8r5bfe"/><path class="yt28hwmoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-color-fill-16"} {...others} />);
}

export default Component;
