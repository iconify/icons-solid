import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6_oaacrp.css';
import '../../css/z/znp8eubox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o6_oaacrp"/><path class="znp8eubox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medassist"} {...others} />);
}

export default Component;
