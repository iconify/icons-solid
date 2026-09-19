import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3p7h4o0c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o3p7h4o0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pc-display"} {...others} />);
}

export default Component;
