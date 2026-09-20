import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qay0ro2fz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qay0ro2fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:marquee-selection"} {...others} />);
}

export default Component;
