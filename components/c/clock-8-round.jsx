import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/keptgrnkd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="keptgrnkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-8-round"} {...others} />);
}

export default Component;
