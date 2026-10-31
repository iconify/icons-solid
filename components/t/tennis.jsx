import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxqg8fv1c.css';
import '../../css/o/otifn1cno.css';
import '../../css/z/zpp8o2n5n.css';
import '../../css/s/s1z1k3j-m.css';
import '../../css/e/epco67iic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xxqg8fv1c"/><path class="otifn1cno wm-shadow"/><path class="zpp8o2n5n"/><path class="s1z1k3j-m"/><path class="epco67iic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tennis"} {...others} />);
}

export default Component;
