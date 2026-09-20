import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2rq36bvg.css';
import '../../css/s/s68-iubef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2rq36bvg"/><path class="s68-iubef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:boolean-off-24"} {...others} />);
}

export default Component;
