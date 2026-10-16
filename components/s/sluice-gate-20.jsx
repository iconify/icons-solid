import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajach0a3z.css';
import '../../css/f/fyvg948cl.css';
import '../../css/x/xpigs6blj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajach0a3z"/><path class="fyvg948cl"/><path class="xpigs6blj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sluice-gate-20"} {...others} />);
}

export default Component;
