import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la86yvriw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la86yvriw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:maximize-2-fill"} {...others} />);
}

export default Component;
