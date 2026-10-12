import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta5f1hbwd.css';
import '../../css/r/r-bb6_b2h.css';
import '../../css/e/ehrnxuvhv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ta5f1hbwd"/><path class="r-bb6_b2h"/><path class="ehrnxuvhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pig-48-bold"} {...others} />);
}

export default Component;
