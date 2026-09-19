import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehtknl-of.css';
import '../../css/k/kxd8gsbwd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ehtknl-of"/><path class="clr-i-outline clr-i-outline-path-2 kxd8gsbwd"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:bell-curve-line"} {...others} />);
}

export default Component;
