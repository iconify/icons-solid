import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgdeoyjsb.css';
import '../../css/o/ofcc3eb8l.css';
import '../../css/w/w39gksq7h.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 qgdeoyjsb"/><path class="clr-i-outline clr-i-outline-path-2 ofcc3eb8l"/><path class="clr-i-outline clr-i-outline-path-3 w39gksq7h"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:trailer-line"} {...others} />);
}

export default Component;
