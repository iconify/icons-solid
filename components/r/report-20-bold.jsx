import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9ps03s-o.css';
import '../../css/q/q0ooqm0dp.css';
import '../../css/h/hcg44lb5l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y9ps03s-o"/><path class="q0ooqm0dp"/><path class="hcg44lb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:report-20-bold"} {...others} />);
}

export default Component;
