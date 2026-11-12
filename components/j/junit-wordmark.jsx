import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl5yxuxbb.css';
import '../../css/q/qpw537-7f.css';
import '../../css/o/omvhn6b9p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zl5yxuxbb"/><path class="qpw537-7f"/><path class="omvhn6b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:junit-wordmark"} {...others} />);
}

export default Component;
