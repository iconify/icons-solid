import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu4ur2bsh.css';
import '../../css/s/sfk--8u6e.css';
import '../../css/g/gm8qkmbxw.css';
import '../../css/w/w3jaxb-qk.css';
import '../../css/s/sh7fc8kep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu4ur2bsh wm-shadow"/><path class="sfk--8u6e wm-k"/><path class="gm8qkmbxw wm-k"/><path class="w3jaxb-qk wm-a"/><path class="sh7fc8kep wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:toran"} {...others} />);
}

export default Component;
