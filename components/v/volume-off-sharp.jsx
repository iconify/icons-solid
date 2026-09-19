import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apsjy4boa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="apsjy4boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:volume-off-sharp"} {...others} />);
}

export default Component;
