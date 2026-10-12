import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb9gv9bqr.css';
import '../../css/j/jw-5zob1j.css';
import '../../css/l/l2nzezbia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sb9gv9bqr"/><path class="jw-5zob1j"/><path class="l2nzezbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stethoscope-20-bold"} {...others} />);
}

export default Component;
