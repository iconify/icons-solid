import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0_8gkb3b.css';
import '../../css/l/l6c64qyvc.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="k0_8gkb3b"/><path class="l6c64qyvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-updated-fill-12"} {...others} />);
}

export default Component;
