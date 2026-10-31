import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf-497bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sf-497bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-down-fill-round"} {...others} />);
}

export default Component;
