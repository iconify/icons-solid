import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5be5-ssr.css';
import '../../css/j/jn7q2h3yu.css';
import '../../css/o/o4xfpac0a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e5be5-ssr"/><path class="jn7q2h3yu"/><path class="o4xfpac0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:visa"} {...others} />);
}

export default Component;
