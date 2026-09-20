import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2rq36bvg.css';
import '../../css/m/mzvqb-b0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2rq36bvg"/><path class="mzvqb-b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:dice-24"} {...others} />);
}

export default Component;
