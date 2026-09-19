import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl-3szpmw.css';
import '../../css/g/g_0ul0b0z.css';
import '../../css/g/gnu88kuoj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bl-3szpmw"/><path class="g_0ul0b0z"/><path class="gnu88kuoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:group"} {...others} />);
}

export default Component;
