import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkufy8bip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vkufy8bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrows-all-direction-2"} {...others} />);
}

export default Component;
