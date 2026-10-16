import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azssgq8vo.css';
import '../../css/o/oqha46qhl.css';
import '../../css/d/d4o-fcjig.css';
import '../../css/s/sjl0glo2d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="azssgq8vo"/><path class="oqha46qhl"/><path class="d4o-fcjig"/><path class="sjl0glo2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-gas-48"} {...others} />);
}

export default Component;
