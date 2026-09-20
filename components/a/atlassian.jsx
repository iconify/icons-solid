import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-2z2kr8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-2z2kr8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:atlassian"} {...others} />);
}

export default Component;
