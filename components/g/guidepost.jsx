import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isc-7v3rs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="isc-7v3rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:guidepost"} {...others} />);
}

export default Component;
