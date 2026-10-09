import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcailpd3t.css';
import '../../css/k/k_y542bvu.css';
import '../../css/c/clrbi72ou.css';
import '../../css/o/o1-his81l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dcailpd3t"/><path class="k_y542bvu"/><path class="clrbi72ou"/><path class="o1-his81l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowflake-48"} {...others} />);
}

export default Component;
