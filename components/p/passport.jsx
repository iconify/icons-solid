import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-gtfwber.css';
import '../../css/c/cgfv1zh5k.css';
import '../../css/k/kv-1z5b6f.css';
import '../../css/g/g27jbvk3j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a-gtfwber"/><path class="cgfv1zh5k"/><path class="kv-1z5b6f"/><path class="g27jbvk3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:passport"} {...others} />);
}

export default Component;
