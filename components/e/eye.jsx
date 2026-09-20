import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8kz08b1o.css';
import '../../css/x/xl0flj30v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i8kz08b1o"/><path class="xl0flj30v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:eye"} {...others} />);
}

export default Component;
