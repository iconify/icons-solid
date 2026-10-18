import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiwpj83ce.css';
import '../../css/h/h9e4f9v-u.css';
import '../../css/l/ln0tkebwf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xiwpj83ce"/><path class="h9e4f9v-u"/><path class="ln0tkebwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-bond-20"} {...others} />);
}

export default Component;
