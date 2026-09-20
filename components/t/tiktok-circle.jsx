import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knj0e0bmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knj0e0bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tiktok-circle"} {...others} />);
}

export default Component;
