import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubfb-9idi.css';
import '../../css/o/o0mm69boz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ubfb-9idi"/><path class="o0mm69boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:noise-reduction-20-bold"} {...others} />);
}

export default Component;
