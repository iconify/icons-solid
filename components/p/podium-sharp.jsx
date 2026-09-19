import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgojmwbvg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pgojmwbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:podium-sharp"} {...others} />);
}

export default Component;
