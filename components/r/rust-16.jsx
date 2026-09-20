import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe2qv6oon.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qe2qv6oon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:rust-16"} {...others} />);
}

export default Component;
