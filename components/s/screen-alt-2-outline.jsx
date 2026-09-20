import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2j2plflq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d2j2plflq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:screen-alt-2-outline"} {...others} />);
}

export default Component;
