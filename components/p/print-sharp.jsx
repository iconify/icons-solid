import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwvk4z-7p.css';
import '../../css/a/aa_03ls8j.css';
import '../../css/i/iki_14f2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kwvk4z-7p"/><rect class="aa_03ls8j"/><rect class="aa_03ls8j"/><path class="iki_14f2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:print-sharp"} {...others} />);
}

export default Component;
