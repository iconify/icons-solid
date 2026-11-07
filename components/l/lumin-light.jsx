import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzfogzbxm.css';

const viewBox = {"width":59,"height":59,"left":582,"top":232.67};
const content = `<path class="gzfogzbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lumin-light"} {...others} />);
}

export default Component;
