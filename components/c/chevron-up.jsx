import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chwl8y35o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chwl8y35o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chevron-up"} {...others} />);
}

export default Component;
