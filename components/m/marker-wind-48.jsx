import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/h/heh2nlbbt.css';
import '../../css/z/z99seoezc.css';
import '../../css/o/oi39qw3xj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="heh2nlbbt"/><path class="z99seoezc"/><path class="oi39qw3xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-wind-48"} {...others} />);
}

export default Component;
