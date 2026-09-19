import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifi4wh1fy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ifi4wh1fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-times-circle-fill"} {...others} />);
}

export default Component;
