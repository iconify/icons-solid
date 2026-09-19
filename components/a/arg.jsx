import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueotyd6eo.css';
import '../../css/m/md286fbip.css';
import '../../css/v/ven97ur9o.css';
import '../../css/v/vsuxv3bqv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ueotyd6eo"/><g class="md286fbip"><path class="ven97ur9o"/><path class="vsuxv3bqv"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:arg"} {...others} />);
}

export default Component;
