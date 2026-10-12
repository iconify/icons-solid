import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3j0gtb9o.css';
import '../../css/l/l7s7xcc2s.css';
import '../../css/l/lfph_mk7l.css';
import '../../css/r/r6tthcc7g.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u3j0gtb9o"/><path class="l7s7xcc2s"/><path class="lfph_mk7l"/><path class="r6tthcc7g"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-check-48"} {...others} />);
}

export default Component;
