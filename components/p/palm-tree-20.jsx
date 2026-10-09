import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piwcl33hw.css';
import '../../css/z/z1hh6xrvl.css';
import '../../css/u/uo2_qkbiq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="piwcl33hw"/><path class="z1hh6xrvl"/><path class="uo2_qkbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palm-tree-20"} {...others} />);
}

export default Component;
