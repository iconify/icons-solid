import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gklbd6bzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gklbd6bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-up-to-line-duotone-round"} {...others} />);
}

export default Component;
