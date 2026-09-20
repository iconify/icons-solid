import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh06ukb7c.css';
import '../../css/c/c3i4qtosu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uh06ukb7c"/><path class="c3i4qtosu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:save-solid"} {...others} />);
}

export default Component;
