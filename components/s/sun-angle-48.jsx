import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_49f5bfn.css';
import '../../css/o/oz7q2qb4l.css';
import '../../css/q/qxq5b3bsr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_49f5bfn"/><path class="oz7q2qb4l"/><path class="qxq5b3bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-angle-48"} {...others} />);
}

export default Component;
