import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/b/bzun-yi8p.css';
import '../../css/a/abb_e7b3y.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="rmslx6b5x"/><path class="bzun-yi8p"/><path class="abb_e7b3y"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-senegal"} {...others} />);
}

export default Component;
