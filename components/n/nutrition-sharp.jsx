import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqi4ufqbo.css';
import '../../css/y/ylqfvzsqq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rqi4ufqbo"/><path class="ylqfvzsqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:nutrition-sharp"} {...others} />);
}

export default Component;
