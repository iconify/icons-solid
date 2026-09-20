import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk1l1r10t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vk1l1r10t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:atlassian-logo-solid"} {...others} />);
}

export default Component;
