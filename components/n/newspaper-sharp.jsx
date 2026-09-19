import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-_7j5bcq.css';
import '../../css/x/x-uz1nb-i.css';
import '../../css/y/ym9wp7_vb.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="n-_7j5bcq"/><path class="x-uz1nb-i"/><path class="ym9wp7_vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:newspaper-sharp"} {...others} />);
}

export default Component;
