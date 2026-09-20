import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9xc_ibsf.css';
import '../../css/k/kklcasb7n.css';
import '../../css/w/wumwuos8q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y9xc_ibsf"/><path class="kklcasb7n"/><path class="wumwuos8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-vectors-pen-new-anchor"} {...others} />);
}

export default Component;
