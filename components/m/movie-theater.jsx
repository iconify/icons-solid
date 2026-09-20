import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg3i-ab3c.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="lg3i-ab3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:movie-theater"} {...others} />);
}

export default Component;
