import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-ge2ebrp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z-ge2ebrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:grin-squint-tears"} {...others} />);
}

export default Component;
