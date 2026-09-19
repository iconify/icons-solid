import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aisklebme.css';
import '../../css/z/z6pi86s9p.css';
import '../../css/p/p_7ey5koq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="aisklebme"/><path class="z6pi86s9p"/><path class="p_7ey5koq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:radio-outline"} {...others} />);
}

export default Component;
