import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq2m4g_iz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eq2m4g_iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:unplug"} {...others} />);
}

export default Component;
