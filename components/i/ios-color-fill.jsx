import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp35ndvma.css';
import '../../css/x/xyg2e4p_h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tp35ndvma"/><path class="xyg2e4p_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-color-fill"} {...others} />);
}

export default Component;
