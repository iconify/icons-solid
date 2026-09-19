import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se3k9k9su.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="se3k9k9su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-call-in-fill-12"} {...others} />);
}

export default Component;
