import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad0u0jetp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ad0u0jetp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:distribute-vertical-fill-round"} {...others} />);
}

export default Component;
