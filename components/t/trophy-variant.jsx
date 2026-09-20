import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k56p0xzaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k56p0xzaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:trophy-variant"} {...others} />);
}

export default Component;
