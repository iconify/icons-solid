import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/x/xi5qm3bfd.css';
import '../../css/s/snz5rjd4l.css';
import '../../css/q/qx5ebstfw.css';
import '../../css/f/fd9117bsh.css';
import '../../css/t/tff_6ckst.css';

const viewBox = {"width":512,"height":399.42,"top":49.4};
const content = `<g class="bi12bsetm"><g class="l5y23ru5w"><path class="xi5qm3bfd"/><path class="snz5rjd4l"/><path class="qx5ebstfw"/></g><path class="fd9117bsh"/><path class="tff_6ckst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gmail"} {...others} />);
}

export default Component;
