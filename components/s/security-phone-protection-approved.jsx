import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biwk14o8w.css';
import '../../css/x/xy09eobzi.css';
import '../../css/m/mpqq9629o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="biwk14o8w"/><path class="xy09eobzi"/><path class="mpqq9629o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-phone-protection-approved"} {...others} />);
}

export default Component;
