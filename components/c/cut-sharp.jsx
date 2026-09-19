import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko0dg5bwi.css';
import '../../css/d/d70zu1-xi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ko0dg5bwi"/><path class="d70zu1-xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cut-sharp"} {...others} />);
}

export default Component;
