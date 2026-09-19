import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3q3w37ie.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a3q3w37ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bluetooth-sharp"} {...others} />);
}

export default Component;
