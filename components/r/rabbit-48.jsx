import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhg_0dbbc.css';
import '../../css/p/pjqal2h2w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bhg_0dbbc"/><path class="pjqal2h2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rabbit-48"} {...others} />);
}

export default Component;
