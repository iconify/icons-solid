import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2x2vzbqk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b2x2vzbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pin-stroke-16"} {...others} />);
}

export default Component;
